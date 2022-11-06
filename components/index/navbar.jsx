import React from "react";
import Link from "next/Link";

const Navbar = () => {
  return (
    <>
      <nav className="nav" id='nav'>
        <ul className="nav-list">
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
            <a href="#formacionAcademica" className="link">
              <button>formación Académica</button>
            </a>
          </li>
          <li className="item">
            <a href="#proyectos" className="link">
              <button>proyectos</button>
            </a>
          </li>
          <li className="item">
            <a href="#contacto" className="link">
              <button>contacto</button>
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`


      
      
      `}</style>
    </>
  );
};

export default Navbar;
