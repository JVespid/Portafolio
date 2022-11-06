import estilos from "../../styles/stl.js";
const {color} = estilos();
const Navbar = () => {
  return (
    <>
      <nav className="nav" id="nav">
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
        .nav {
          width: 100%;
          height: auto;

        }
        .nav ul {
          background-color: ${color.gris};
          width: 100% ;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .nav ul li{
          width: clamp(100px, 20%, 150px);
          margin: clamp(10px, 20%, 20px);
          text-align: center;
          height: 40px;
        }

        .nav ul li a{
          width: 100%;
        }

        .nav ul li a button{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: solid 1px ${color.naranja};
          border-bottom: solid 1px ${color.naranja};
          color:${color.naranja};
          border-radius: 5px;
          font-weight: bold;
        }

        .nav ul li:hover a button{
          background-color: ${color.naranja};
          color: ${color.blanco};
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Navbar;
