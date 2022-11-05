import React, { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

import useWindowSize from "../hooks/useWindowSize";
import DataComponent from "./index/subComponents/dataComponent";

const LayoutComponents = ({ url, title, type, page }) => {
  const router = Router;
  const redirect = () => {
    router.push(`${url}`);
  };

  let range = 8;

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

  const size = useWindowSize();
  const style = {
    width: size.width,
  };
  if (page === `main`) {
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
              <DataComponent data={data} type={type} key={type} />
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
            height: auto;
            display: flex;
          }
        `}</style>

        <style jsx global>{`
          .general-content {
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
            background-color: rgba(244, 244, 244, 1);
            -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
            position: relative;
            cursor: pointer;

            overflow: hidden;
          }
          
          .items:hover {
            overflow: visible;
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

          .items:hover p {
            visibility: visible;
            top: 100%;
            z-index: 1000;
            -webkit-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
          }
          .items img {
            width: clamp(40px, 100%, 150px);
            height: auto;

            position: relative;
            transition: 0.25s;
            top: 0;
          }



          .items:hover img {
            top: -35px;
            -webkit-box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
            
          }

          .items:hover {
            -webkit-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </>
    );
  }
};

export default LayoutComponents;
