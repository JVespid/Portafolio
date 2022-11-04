import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "./index/subComponents/dataComponent";

const LayoutComponents = ({ url, title, type }) => {
  const router = Router;
  const redirect = () => {
    router.push(`${url}`);
  };

  const [data, setData] = useState([]);

  const request = async () => {
    const res = await axios.get(`/api/${type}/data`);
    setData(JSON.parse(res.data));
  };

  useEffect(() => {
    if (type !== "contacto") {
      request();
    }
  }, [type]);

  const size = useWindowSize();
  const style = {
    width: size.width,
  };

  return (
    <>
      <section className="layout-components">
        <div className="bar">
          {type != "contacto" ? (
            <div className="upLoad">
              <button onClick={request}>recargar</button>
            </div>
          ) : null}
          <input type="button" value="Ver más ->" onClick={redirect} />
        </div>
        <div className="container">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="content">
            <DataComponent data={data} type={type} />
          </div>
        </div>
      </section>

      <style jsx>{`
        .layout-components {
          width: 100%;
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
        .bar input {
          margin-right: 10px;
          background-color: rgba(0, 0, 0, 0);
          color: rgb(195, 117, 24);
        }
        .bar input:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.1);
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
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        .general-content {
          width: 100%;
          display: flex;
          justify-content: space-around;

          margin: 10px auto;

          position: relative;
          z-index: 1;
        }

        .items {
          background-color: rgba(111, 15, 15, 1);

          -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
          position: relative;
        }

        .items p {
          position: absolute;
          top: 50%;
          z-index: -1;
          transition: 0.25s;

          width: 100%;

          background-color: rgba(250, 250, 250, 1);

          display: flex;
          justify-content: center;
        }
        .items:hover p {
          top: 100%;
        }
      `}</style>
    </>
  );
};

export default LayoutComponents;
