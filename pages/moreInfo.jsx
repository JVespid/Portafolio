import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "../components/index/subComponents/dataComponent";

import estilos from "../styles/stl.js";
const { color } = estilos();

const MoreInfo = ({ query }) => {
  const router = Router;
  const backToHome = () => router.push("/");
  const nextPge = () =>
    router.push(`/moreInfo?type=${type}&page=${setPage(page + 1)}&maxRange=${maxRange}`);

  const type = query.type;

  const maxRange = maxRangeType(type);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(query.page ? query.page : 1);

  const request = async () => {
    const res = await axios.get(
      `/api/${type}/data?page=${page}&maxRange=${maxRange}`
    );
    setData(JSON.parse(res.data));
  };

  useEffect(() => {
    if (type !== "contacto") {
      request();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
          <DataComponent
            data={data}
            type={type}
            page={type}
            key={type}
            request={request}
          />

          <div className="pagination"></div>
        </div>
      </main>

      <style jsx global>{`
        .errorLoad {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .errorLoad h3 {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          font-size: clamp(1.5rem, 1.5vw, 2rem);
          color: ${color.azul};
        }
        .errorLoad button {
          width: clamp(50px, 10vw, 100px);
          height: clamp(20px, 10vw, 40px);
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${color.gris};
          color: ${color.naranja};
        }
        .errorLoad button:hover {
          cursor: pointer;
          color: ${color.gris};
          background-color: ${color.naranja};
        }

        .general-content {
          position: relative;
          z-index: 1;
          width: 90%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px;
          justify-content: space-around;
          align-items: center;
          margin: 10px auto;
          position: relative;
          z-index: 1;
          overflow: visible;
        }

        .items {
          margin: 20px auto;
          height: auto;
          display: flex;
          flex-direction: column;
          position: relative;
          background-color: ${color.gris};
          position: relative;
          cursor: pointer;
          overflow: hidden;
          -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
        }

        .items img {
          width: clamp(100px, 100%, 100%);
          height: auto;
          position: relative;
          transition: 0.25s;
          top: 0;

          fit-content: cover;
        }

        .items p {
          position: absolute;
          top: -100px;
          z-index: -1;
          transition: 0.25s;
          width: calc(100% - 5px);
          background-color: ${color.blanco};
          display: flex;
          justify-content: center;
          overflow: hidden;
          padding-left: 5px;
          padding-top: 10px;
          box-sizing: content-box;
          visibility: hidden;
        }

        .items h3 {
          width: calc(100% - 5px);
          height: 40px;
          background-color: ${color.blanco};
          padding-left: 5px;
          position: absolute;
          display: flex;
          justify-content: flex-start;
          transition: 0.25s;
          align-items: center;
          align-content: center;
          top: calc(100% - 40px);
          text-overflow: ellipsis;
        }

        a {
          text-decoration: none;
          color: ${color.naranja};
        }

        .items:hover h3 {
          padding-left: 10px;
          width: calc(100% - 10px);
        }

        .items:hover img {
          top: -35px;
          -webkit-box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
        }

        .items:hover p {
          display: flex;
          flex-direction: column;
          justify-content: center;

          visibility: visible;
          top: 100%;
          z-index: 1000;
          -webkit-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
        }

        .items:hover {
          overflow: visible;
          -webkit-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
        }

        /*estilos personalizados en base a medidas */
        .skill-item {
          min-width: clamp(100px, 100%, 250px);
          max-width: clamp(100px, 100%, 250px);
          fit-content: cover;
        }

        .hobbies-item {
          min-width: clamp(100px, 100%, 250px);
          max-width: clamp(100px, 100%, 250px);
          height: auto;
          fit-content: cover;
        }
        .formacionAcademica-item {
          min-width: clamp(100px, 100%, 400px);
          max-width: clamp(100px, 100%, 400px);
          height: auto;
          fit-content: cover;
        }
        .formacionAcademica-item h3 {
          height: 60px;
          top: calc(100% - 60px);
        }
        .proyectos-item {
          min-width: clamp(100px, 100%, 400px);
          max-width: clamp(100px, 100%, 400px);
          height: auto;
        }
        .proyectos-item h3 {
          height: 60px;
          top: calc(100% - 60px);
        }
      `}</style>
    </>
  );
};

export function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}

const maxRangeType = type => {
  switch (type) {
    case "skills":
      return 10;
    case "hobbies":
      return 10;
    case "FormacionAcademica":
      return 8;
    case "proyectos":
      return 8;

    default:
      return 7;
  }
};
export default MoreInfo;
