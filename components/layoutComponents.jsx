/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import Router from "next/router";

import DataComponent from "./dataComponent";
import stl from "../styles/layoutC.module.scss";
import AnimationHome from "./index/animationHome";

import { globalContext } from "../context/global/globalState";

const LayoutComponents = ({ title, type }) => {
  const router = Router;
  const { getChangeData } = useContext(globalContext);

  const redirect = type => {
    const url = `/moreInfo?type=${type}`;
    router.push(`${url}`);
  };

  const request = type => {
    getChangeData(type);
  };

  useMemo(() => {
    if (type != "Contacto") {
      request(type);
    }
  }, []);

  return (
    <>
      <section
        className={`${stl.layoutComponents} ${stl[type]}`}
        id={`${type}`}
      >
        <AnimationHome
          request={() => {
            request(type);
          }}
          type={type}
          title={title}
        >
          <div className={stl.bar}>
            {type != "contacto" ? (
              <button
                className={stl.request}
                onClick={() => {
                  request(type);
                }}
              >
                recargar
              </button>
            ) : null}

            <button
              className={stl.redirect}
              onClick={() => {
                redirect(type);
              }}
            >
              {"Ver más ->"}
            </button>
          </div>
          <DataComponent
            type={type}
            key={type}
            typeComponent={1}
            request={() => {
              request(type);
            }}
            title={title}
          />
        </AnimationHome>
      </section>

      <style jsx global>{`
        .container {
          width: 98%;
          height: auto;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
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
    </>
  );
};

export default LayoutComponents;
