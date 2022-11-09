import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "./index/subComponents/dataComponent";
import estilos from "../styles/stl.js";

const { color } = estilos();

const LayoutComponents = ({ title, type }) => {
  const router = Router;
  const [stylehoverReq, setStyleHoverReq] = useState({});
  let [stylehoverRed, setStyleHoverRed] = useState({});

  const [isShownReq, setIsShownReq] = useState(false);
  const [isShownRed, setIsShownRed] = useState(false);

  const redirect = () => {
    const url = `/moreInfo?type=${type}`;
    router.push(`${url}`);
  };

  let range = typeRange(type);

  const [data, setData] = useState([]);

  const request = async () => {
    const res = await axios.get(`/api/${type}/data/?range=${range}`);
    setData(JSON.parse(res.data));
  };

  useEffect(() => {
    if (type !== "contacto") {
      request();
    }
  }, [type]);

  useEffect(() => {
    setStyleHoverRed({
      backgroundColor: color.gris,
      color: color.naranja,
    });
    setStyleHoverReq({
      backgroundColor: color.naranja,
      color: color.gris,
    });

    if (isShownRed) {
      setStyleHoverReq({
        backgroundColor: color.gris,
        color: color.naranja,
      });
      setStyleHoverRed({
        backgroundColor: color.naranja,
        color: color.gris,
      });
    }

    isShownReq &&
      setStyleHoverReq({
        backgroundColor: color.naranja,
        color: color.gris,
        fontSize: "15px",
      });
  }, [isShownReq, isShownRed]);

  const size = useWindowSize();
  const style = {
    width: size.width,
  };

  return (
    <>
      <section className="layout-components" id={`${type}`}>
        <div className="bar">
          {type != "contacto" ? (
            <button
              className="request"
              onClick={request}
              onMouseEnter={() => setIsShownReq(true)}
              onMouseLeave={() => setIsShownReq(false)}
              style={stylehoverReq}
            >
              recargar
            </button>
          ) : null}
          <input
            className="redirect"
            type="button"
            value="Ver más ->"
            onClick={redirect}
            style={stylehoverRed}
            onMouseEnter={() => setIsShownRed(true)}
            onMouseLeave={() => setIsShownRed(false)}
          />
        </div>

        <div className="container">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="content">
            {data ? (
              <DataComponent
                data={data}
                type={type}
                key={type}
                request={request}
              />
            ) : (
              <div className="errorLoad">
                <h3>Error al cargar los datos, intentarlo de nuevo</h3>
                <button onClick={request}>Reintentar</button>
              </div>
            )}
          </div>
        </div>
        <div className="up">
          <a href="#nav" className="up-a">
            <button>subir ^</button>
          </a>
        </div>
      </section>

      <style jsx>{`
        .layout-components {
          width: 80%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          margin: 10px auto;
        }
        .bar {
          width: 100%;

          padding: 10px auto;
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        .bar .request,
        .bar input {
          margin: 5px;
          margin-right: 10px;
          padding: 2px 10px;
          border-radius: 15px;
        }
        .bar .request:hover,
        .bar input:hover {
          cursor: pointer;

          cursor: pointer;
        }

        .container {
          width: 98%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
        }

        .title {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .title h2 {
          color: rgb(51, 144, 255);
        }
        .content {
          width: 100%;
          height: auto;
          display: flex;
        }
        .up {
          width: 100%;
          margin: 5px auto;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        .up-a {
          width: 80px;
          height: 30px;
          overflow: hidden;
          border-radius: 15px;
        }
        .up-a button {
          width: 100%;
          height: 100%;
          color: ${color.naranja};
        }
        .up-a button:hover {
          cursor: pointer;
          background-color: ${color.naranja};
          color: ${color.blanco};
        }
      `}</style>

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
          width: 100%;
          height: clamp(100px, auto, 150px);
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
          min-width: clamp(100px, 100%, 150px);
          max-width: clamp(100px, 100%, 150px);
          fit-content: cover;
        }

        .hobbies-item {
          min-width: clamp(100px, 100%, 150px);
          max-width: clamp(100px, 100%, 150px);
          height: auto;
          fit-content: cover;
        }
        .formacionAcademica-item {
          min-width: clamp(100px, 100%, 300px);
          max-width: clamp(100px, 100%, 300px);
          height: auto;
          fit-content: cover;
        }
        .formacionAcademica-item h3 {
          height: 60px;
          top: calc(100% - 60px);
        }
        .proyectos-item {
          min-width: clamp(100px, 100%, 300px);
          max-width: clamp(100px, 100%, 300px);
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

const typeRange = type => {
  let range;
  switch (type) {
    case "hobbies":
      return (range = 6);

    case "formacionAcademica":
      return (range = 3);

    case "proyectos":
      return (range = 5);

    default:
      return (range = 7);
  }
};

export default LayoutComponents;
