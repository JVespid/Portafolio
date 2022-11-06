import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "./index/subComponents/dataComponent";
import estilos from "../styles/stl.js";
const { color } = estilos();

const LayoutComponents = ({ url, title, type, page }) => {
  const router = Router;
  const [stylehoverReq, setStyleHoverReq] = useState({});
  let [stylehoverRed, setStyleHoverRed] = useState({});

  const [isShownReq, setIsShownReq] = useState(false);
  const [isShownRed, setIsShownRed] = useState(false);

  const redirect = () => {
    router.push(`${url}`);
  };

  let range;
  switch (type) {
    case "hobbies":
      range = 6;
      break;
    case "formacionAcademica":
      range = 3;
      break;
    case "proyectos":
      range = 5;
      break;
    default:
      range = 7;
      break;
  }

  const [data, setData] = useState([]);

  const request = async () => {
    const res = await axios.get(`/api/${type}/data/?range=${range}`);
    setData(JSON.parse(res.data));
  };

  useEffect(() => {
    if (type !== "contacto" && page === "main") {
      request();
    }
  }, [type]);

  useEffect(() => {
    if (isShownRed) {
      setStyleHoverReq({
        backgroundColor: color.gris,
        color: color.naranja,
      });
      setStyleHoverRed({
        backgroundColor: color.naranja,
        color: color.gris,
      });
    } else {
      setStyleHoverRed({
        backgroundColor: color.gris,
        color: color.naranja,
      });
      setStyleHoverReq({
        backgroundColor: color.naranja,
        color: color.gris,
      });
    }
    if (isShownReq) {
      setStyleHoverReq({
        backgroundColor: color.naranja,
        color: color.gris,
        fontSize: "15px",
      });
    }
  }, [isShownReq, isShownRed]);

  const size = useWindowSize();
  const style = {
    width: size.width,
  };

  const requestHover = e => {
    console.log(e);
  };
  const redirectHover = () => {};

  return (
    <>
      <section className="layout-components"id={`${type}`}>
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

        <div className="container" >
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="content">
            <DataComponent data={data} type={type} key={type} />
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
          background-color: rgba(244, 244, 244, 1);
          position: relative;
          cursor: pointer;
          overflow: hidden;
          -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
        }

        .items img {
          width: clamp(40px, 100%, 10000px);
          height: auto;
          position: relative;
          transition: 0.25s;
          top: 0;
        }

        .items p {
          position: absolute;
          top: -100px;
          z-index: -1;
          transition: 0.25s;
          width: calc(100% - 5px);
          background-color: rgba(250, 250, 250, 1);
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
          background-color: rgba(250, 250, 250, 1);
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
          color: ${color.test};
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
      `}</style>
    </>
  );
};

export default LayoutComponents;
