import estilos from "../../styles/stl.js";
import useWindowSize from "../../hooks/useWindowSize";
import React, { useState, useEffect } from "react";
const { color } = estilos();
const Navbar = () => {
  const size = useWindowSize();

  const [styleNav, setStyleNav] = useState("");
  const [styleBloqued, setStyleBloqued] = useState("");

  const [initialStyle, setInitialStyle] = useState(1);

  const ifClick = e => {
    if (initialStyle == 1) {
      setInitialStyle(initialStyle + 1);
      firstClick(e);
    }
    if (initialStyle == 2) {
      setInitialStyle(initialStyle - 1);
      secondClick(e);
    }
  };
  const ifClickLi = e => {
    if (initialStyle == 2) {
      setInitialStyle(initialStyle - 1);
      secondClick(e);
    }
  };

  console.log("malo");

  const firstClick = e => {
    setStyleNav("nav-click");
    setStyleBloqued("complement-click");
  };
  const secondClick = e => {
    setStyleNav("");
    setStyleBloqued("");
  };

  return (
    <>
      <nav className={`nav ${styleNav}`} id="nav">
        <button className="burger-btn" onClick={ifClick}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </button>

        <ul className="nav-list">
          <li className="item">
            <a href="#skills" className="link">
              <button onClick={ifClickLi}>skills</button>
            </a>
          </li>
          <li className="item">
            <a href="#hobbies" className="link">
              <button onClick={ifClickLi}>hobbies</button>
            </a>
          </li>
          <li className="item">
            <a href="#FormacionAcademica" className="link">
              <button onClick={ifClickLi}>formación Académica</button>
            </a>
          </li>
          <li className="item">
            <a href="#proyectos" className="link">
              <button onClick={ifClickLi}>proyectos</button>
            </a>
          </li>
          <li className="item">
            <a href="#Contacto" className="link">
              <button onClick={ifClickLi}>contacto</button>
            </a>
          </li>
        </ul>
      </nav>
      <div className={`complement ${styleBloqued}`} onClick={ifClick}></div>

      <style jsx>{`
        .nav {
          position: fixed;
          width: 1px;
          height: 100vh;
          z-index: 50;
          background-color: ${color.primario};
          border-right: solid 1px ${color.gris};
          overflow: visible;
          transition: width, 0.5s;
        }
        .complement {
          position: fixed;
          top: 0;
          transform: translateX(0px);
          width: 0;
          z-index: 49;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          transition: width, 0.5s;
        }
        .nav ul {
          position: relative;
          left: -210px;
          margin: 120px auto;
          width: 1px;
          height: auto;
          display: flex;
          flex-direction: column;
          transition: width, 0.5s;
        }
        .nav ul li {
          position: relative;
          width: clamp(100px, 27000%, 270px);
          margin: 20px auto;
          text-align: center;
          height: 50px;
          background-color: ${color.gris};
          clip-path: polygon(80% 1%, 100% 53%, 80% 100%, 0 100%, 0 0);
          overflow: hidden;
          transition: 0.2s;
        }
        .nav ul li:hover {
          background-color: ${color.naranja};
          transform: translateX(200px);
        }

        .nav ul li::before {
          clip-path: polygon(80% 1%, 100% 53%, 80% 100%, 0 100%, 0 0);
          overflow: hidden;
          background-color: ${color.primario};
          position: absolute;
          content: "";
          inset: 2px;
          z-index: 10;
          overflow: hidden;
        }

        .nav ul li a {
          display: inline-block;
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 10;
        }

        .nav ul li a button {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${color.transparente};
          color: ${color.gris};
          border-radius: 5px;
          font-weight: bold;
        }
        .nav ul li a button:hover {
          color: ${color.naranja};
          cursor: pointer;
        }

        .nav ul li:last-child {
          background-color: ${color.naranja};
        }

        .burger-btn {
          background-color: ${color.primario};
          display: flex;
          flex-direction: column;
          padding: 5px;
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
          border: solid 1px ${color.naranja};
          z-index: 10;
          position: fixed;
          top: 10px;
          left: 10px;
        }
        .burger {
          width: calc(100% - 10px);
          height: calc(40% - 10px);
          background-color: ${color.naranja};
          margin: auto;
        }

        @media (max-width: 500px) {
          .nav ul li {
            width: clamp(100px, 100%, 270px);
          }
          .nav ul li:hover {
            transform: translateX(0px);
          }
        }

        .nav-click {
          width: clamp(100px, 90%, 300px);
        }
        .complement-click {
          width: 100%;
        }
        .nav-click ul {
          width: 100%;
          left: 0;
          margin: 120px auto;
        }
        .nav-click ul li {
          width: 90%;
          height: 40px;
        }
        .nav-click ul li:hover {
          transform: translateX(20px);
        }

        .burger-btn:hover {
          background-color: ${color.naranja};
          border-color: ${color.negro};
          cursor: pointer;
        }

        .burger-btn:hover .burger {
          background-color: ${color.gris};
        }
      `}</style>
    </>
  );
};

/*

        


        .nav ul li:hover a button {
          background-color: ${color.naranja};
          color: ${color.blanco};
          cursor: pointer;
        }


*/

export default Navbar;
