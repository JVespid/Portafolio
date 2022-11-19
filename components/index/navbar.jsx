import estilos from "../../styles/stl.js";
import useWindowSize from "../../hooks/useWindowSize";
import React, { useState, useEffect } from "react";
const { color } = estilos();
const Navbar = () => {
  const size = useWindowSize();

  const [styleNav, setStyleNav] = useState({});

  const focurBurger = e => {
    setStyleNav({
      height: `${size.height - 250}px`,
      with: `${size.width - 20}px`,
      display: "flex",
      zIndex: "1000000",
    });
  };

  const blurBurger = e => {
    setTimeout(() => {
      setStyleNav({});
    }, 100);
  };

  return (
    <>
      <nav className="nav" id="nav">
        {size.width < 953 ? (
          <button
            className="burger-btn"
            onFocus={focurBurger}
            onBlur={blurBurger}
          >
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </button>
        ) : null}

        <ul className="nav-list" style={styleNav}>
          <li className="item">
            <a href="#skills" className="link">
              <button>skills</button>
            </a>
          </li>
          <li className="item">
            <a href="#hobbies" className="link">
              <button>hobbies</button>
            </a>
          </li>
          <li className="item">
            <a href="#FormacionAcademica" className="link">
              <button>formación Académica</button>
            </a>
          </li>
          <li className="item">
            <a href="#proyectos" className="link">
              <button>proyectos</button>
            </a>
          </li>
          <li className="item">
            <a href="#Contacto" className="link">
              <button>contacto</button>
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .nav {
          width: 100%;
          height: auto;
        }
        .nav ul {
          background-color: ${color.gris};
          width: 100%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          overflow: hidden;
        }
        .nav ul li {
          width: clamp(100px, 20%, 150px);
          margin: clamp(10px, 20%, 20px);
          text-align: center;
          height: 40px;
        }

        .nav ul li a {
          width: 100%;
        }

        .nav ul li a button {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: solid 1px ${color.naranja};
          border-bottom: solid 1px ${color.naranja};
          color: ${color.naranja};
          border-radius: 5px;
          font-weight: bold;
        }

        .nav ul li:hover a button {
          background-color: ${color.naranja};
          color: ${color.blanco};
          cursor: pointer;
        }

        .burger-btn {
          background-color: ${color.transparente};
          display: flex;
          flex-direction: column;
          padding: 5px;
          width: 40px;
          height: 40px;
          justify-content: center;
          align-items: center;
          border: solid 1px ${color.naranja};

          position: absolute;
          left: calc(100% - 60px);
          top: 15px;
          z-index: 1000000;
        }
        .burger {
          width: calc(100% - 10px);
          height: calc(40% - 10px);
          background-color: ${color.naranja};
          margin: auto;
        }

        .burger-btn:hover {
          background-color: ${color.naranja};
          border-color: ${color.negro};
          cursor: pointer;
        }

        .burger-btn:hover .burger {
          background-color: ${color.gris};
        }

        @media (max-width: 953px) {
          .nav {
            background-color: ${color.gris};
            height: 80px;
          }
          .nav ul {
            position: absolute;
            top: 80px;
            height: 0;
            overflow: hidden;
            border: solid 1px ${color.negro};
            background-color: ${color.grisOp};
            transition: 0.5s;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .nav ul li {
            width: clamp(10px, 90%, 300px);
            margin: 20px auto;
            text-align: center;
            height: 40px;
            border: solid 1px ${color.naranja};
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
