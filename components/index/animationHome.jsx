/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import Contacto from "../subDataComponents/contacto";
import estilos from "../../styles/stl";
const { color } = estilos();

/* eslint-disable @next/next/no-img-element */
const AnimationHome = ({ type, request, title, children }) => {
  const [childrenSTL, setChildrenSTL] = useState("animation-children");

  const click = e => {
    setChildrenSTL(" animation-children-click");

    console.log(e.target.clientWidth);
    request();
  };

  switch (type) {
    case "skills": {
      return (
        <>
          <div className="container-all">
            <div className={`animation-children ${childrenSTL}`}>
              {children}
            </div>
            <button onClick={click} className="btn-action">
              <div className="container-previews">
                <div className="title-previews">
                  <h2>{title}</h2>
                </div>
              </div>
            </button>
          </div>

          <style jsx>{`
            .container-all {
              width: 100%;
              min-height: 300px;
              max-height: auto;
              box-sizing: border-box;
              overflow: hidden;
            }
            .animation-children {
              width: 100%;
              height: 0;
              overflow: hidden;
              transition: height, width, top, bottom, 2s;
            }
            .container-previews {
              position: relative;
              z-index: 1;
              color: ${color.gris};
            }
            .btn-action {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              position: relative;
              transition: height, width, top, bottom, 2s;
            }
            .btn-action::after {
              content: "";
              position: absolute;
              background: ${color.negro};
              inset: 4px;
            }
            .btn-action::before {
              content: "";
              position: absolute;
              height: 70%;
              width: 110%;
              background: ${color.naranja};
              animation: animation 4s linear infinite;
            }

            @keyframes animation {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .animation-children-click {
              height: 100%;
            }
          `}</style>
        </>
      );
    }
    case "hobbies": {
      return (
        <>
          <div className="container-all">
            <div className={`animation-children ${childrenSTL}`}>
              {children}
            </div>
            <button onClick={click} className="btn-action">
              <div className="container-previews">
                <div className="title-previews">
                  <h2>{title}a</h2>
                </div>
              </div>
            </button>
          </div>

          <style jsx>{`
            .container-all {
              width: 100%;
              min-height: 300px;
              max-height: auto;
              box-sizing: border-box;
              overflow: hidden;
            }
            .animation-children {
              width: 100%;
              height: 0;
              overflow: hidden;
              transition: height, width, top, bottom, 2s;
            }
            .container-previews {
              position: relative;
              z-index: 1;
              color: ${color.gris};
            }
            .btn-action {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              position: relative;
              transition: height, width, top, bottom, 2s;
            }
            .btn-action::after {
              content: "";
              position: absolute;
              background: ${color.negro};
              inset: 4px;
            }
            .btn-action::before {
              content: "";
              position: absolute;
              height: 70%;
              width: 110%;
              background: ${color.naranja};
              animation: animation 4s linear infinite;
            }

            @keyframes animation {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .animation-children-click {
              height: 100%;
            }
          `}</style>
        </>
      );
    }
    case "FormacionAcademica": {
      return (
        <>
          <div className="container-all">
            <div className={`animation-children ${childrenSTL}`}>
              {children}
            </div>
            <button onClick={click} className="btn-action">
              <div className="container-previews">
                <div className="title-previews">
                  <h2>{title}b</h2>
                </div>
              </div>
            </button>
          </div>

          <style jsx>{`
            .container-all {
              width: 100%;
              min-height: 300px;
              max-height: auto;
              box-sizing: border-box;
              overflow: hidden;
            }
            .animation-children {
              width: 100%;
              height: 0;
              overflow: hidden;
              transition: height, width, top, bottom, 2s;
            }
            .container-previews {
              position: relative;
              z-index: 1;
              color: ${color.gris};
            }
            .btn-action {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              position: relative;
              transition: height, width, top, bottom, 2s;
            }
            .btn-action::after {
              content: "";
              position: absolute;
              background: ${color.negro};
              inset: 4px;
            }
            .btn-action::before {
              content: "";
              position: absolute;
              height: 70%;
              width: 110%;
              background: ${color.naranja};
              animation: animation 4s linear infinite;
            }

            @keyframes animation {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .animation-children-click {
              height: 100%;
            }
          `}</style>
        </>
      );
    }
    case "proyectos": {
      return (
        <>
          <div className="container-all">
            <div className={`animation-children ${childrenSTL}`}>
              {children}
            </div>
            <button onClick={click} className="btn-action">
              <div className="container-previews">
                <div className="title-previews">
                  <h2>{title}c</h2>
                </div>
              </div>
            </button>
          </div>

          <style jsx>{`
            .container-all {
              width: 100%;
              min-height: 300px;
              max-height: auto;
              box-sizing: border-box;
              overflow: hidden;
            }
            .animation-children {
              width: 100%;
              height: 0;
              overflow: hidden;
              transition: height, width, top, bottom, 2s;
            }
            .container-previews {
              position: relative;
              z-index: 1;
              color: ${color.gris};
            }
            .btn-action {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              position: relative;
              transition: height, width, top, bottom, 2s;
            }
            .btn-action::after {
              content: "";
              position: absolute;
              background: ${color.negro};
              inset: 4px;
            }
            .btn-action::before {
              content: "";
              position: absolute;
              height: 70%;
              width: 110%;
              background: ${color.naranja};
              animation: animation 4s linear infinite;
            }

            @keyframes animation {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .animation-children-click {
              height: 100%;
            }
          `}</style>
        </>
      );
    }
    case "Contacto": {
      return (
        <>
          <Contacto typeComponent={1} />
        </>
      );
    }

    default: {
      return (
        <div className="errorLoad">
          <h3>Error al cargar los datos, intentarlo de nuevo</h3>
          <button onClick={request}>Reintentar</button>
        </div>
      );
    }
  }
};

export default AnimationHome;
