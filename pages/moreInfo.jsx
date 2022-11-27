import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import Head from "next/head";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "../components/dataComponent";
import Pagination from "../components/moreInfo/pagination";

import estilos from "../styles/stl.js";
const { color } = estilos();

const MoreInfo = ({ query }) => {
  const size = useWindowSize();
  const styleMain = {
    minHeight: `${size.height - 40}px`,
    width: `${size.width}px`,
    position: `absolute`,
    top: `40px`,
  };

  const router = Router;
  const backToHome = () => router.push("/");
  
  
  const type = query.type;
  const maxRange = maxRangeType(type);

  const [data, setData] = useState([]);
  
  const page = parseInt(query.page ? query.page : 1);  
  const request = async page => {
    const res = await axios.get(
      `/api/${type}/data?page=${page}&maxRange=${maxRange}`
    );

    setData(await JSON.parse(res.data));
  };

  useEffect(() => {
    if (type !== "contacto") {
      request(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Head>
        <link rel="icon" href="/ICONO.ico" />
        <title>{type}</title>
      </Head>

      <nav>
        <div className="regresar">
          <button onClick={backToHome}>{"<--Regresar"}</button>
        </div>
      </nav>

      <main className="layout" style={styleMain}>
        <section className="general"></section>
        <section className="content">
          <DataComponent
            type={type}
            typeComponent={2}
            key={page}
          />
        </section>
        <section className="pagination">
          {data.length > 0 ? (
            <Pagination
              j={data[0].numberPages}
              key={page}
              type={type}
              page={page}
            />
          ) : null}
        </section>
      </main>

      <style jsx>{`
        .p1,
        .p2 {
          border: 1px solid ${color.negro};
          margin: 5px;
        }
      `}</style>

    </>
  );
};
export default MoreInfo;

export function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}

const maxRangeType = type => {

  const maxRange = {
    skills: 9,
    hobbies: 9,
    formacionAcademica: 6,
    proyectos: 7
  }
  return maxRange[type] ?? 7

};
