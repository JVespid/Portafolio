/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

import DataComponent from "./dataComponent";
import estilos from "../styles/stl.js";
import AnimationHome from "./index/animationHome";
const { color } = estilos();

const LayoutComponents = ({ title, type }) => {
  const router = Router;
  const [stylehoverReq, setStyleHoverReq] = useState({});
  const [stylehoverRed, setStyleHoverRed] = useState({});
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

  return (
    <>
      <section className="layout-components" id={`${type}`}>
        <AnimationHome request={request} type={type} title={title}>
          {
            data.length > 0 ? (
              <>
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

                <DataComponent
                  data={data}
                  type={type}
                  key={type}
                  typeComponent={1}
                  request={request}
                  title={title}
                />
              </>
            ) : null

            /*
              <div className="errorLoad">
              <h3>Error al cargar los datos, intentarlo de nuevo</h3>
              <button onClick={request}>Reintentar</button>
              </div>*/
          }
        </AnimationHome>
      </section>

      <style jsx>{`
        .layout-components {
          width: clamp(20px, 90%, 1900px);
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
      `}</style>

      <style jsx global>{`
        h3 {
          color: red;
        }
        .container {
          width: 98%;
          height: auto;
          display: flex;
          flex-direction: column;
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
        .errorLoad {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px auto;
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
      `}</style>
    </>
  );
};

const typeRange = type => {
  const range = {
    hobbies: 6,
    FormacionAcademica: 3,
    proyectos: 5,
  };
  return range[type] ?? 7;
};

export default LayoutComponents;
