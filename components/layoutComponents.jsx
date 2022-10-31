import React from "react";
import Router from "next/router";

import useWindowSize from "../hooks/useWindowSize";

const LayoutComponents = ({ children, url, title }) => {
  const router = Router;
  const redirect = () => {
    router.push(`${url}`);
  };

  const size = useWindowSize();

  const style = {
    width: size.width,
  };

  return (
    <>
      <section className="layout-components" style={style}>
        <div className="bar">
          <input type="button" value="Ver más ->" onClick={redirect} />
        </div>
        <div className="container" >
          <div className="title">
            {" "}
            <h2>{title}</h2>{" "}
          </div>
          <div className="content">{children}</div>
        </div>
      </section>

      <style jsx>{`
        .layout-components {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          margin: 10px auto;

        }
        .bar{
          width: 99%;
          display: flex;
          justify-content: flex-end;
        }
        .bar input {
          margin-right: 10px;
          background-color: rgba(0, 0, 0, 0 );
          color: rgb(195, 117, 24);
        }
        .bar input:hover {
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.1);
        }
        .container {
          width: 98%;
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
      `}</style>
    </>
  );
};

export default LayoutComponents;
