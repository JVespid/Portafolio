import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "../components/index/subComponents/dataComponent";

import estilos from "../styles/stl.js";
const { color } = estilos();

const MoreInfo = ({ query }) => {
  const router = Router;
  const backToHome = () => {
    router.push("/");
  };
  console.log(query);
  const type = query.type;

  const [data, setData] = useState([]);

  const request = async () => {
    const res = await axios.get(`/api/${type}/data/`);
    setData(JSON.parse(res.data));
  };

  useEffect(() => {
    if (type !== "contacto") {
      request();
    }
  }, [type]);

  return (
    <>
      <nav>
        <div className="regresar">
          <button onClick={backToHome}>{"<--Regresar"}</button>
        </div>
      </nav>
      <div>LayoutPagesMore</div>

      <main className="layout">
        <div className="general"></div>
        <div className="content">
          <DataComponent data={data} type={type} page={type} key={type} request={request} />
        </div>
      </main>
    </>
  );
};

export function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}
export default MoreInfo;
