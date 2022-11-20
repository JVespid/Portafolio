/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import Contacto from "../subDataComponents/contacto";
import estilos from "../../styles/stl";
const { color } = estilos();

/* eslint-disable @next/next/no-img-element */
const AnimationHome = ({ type, request, title, children }) => {
  const [childrenSTL, setChildrenSTL] = useState("");
  const [btnActionSTL, setAtnActionSTL] = useState("");
  const [reRequest, setReRequest] = useState(false);

  const click = e => {
    setChildrenSTL(" animation-children-click");
    setAtnActionSTL("container-all-click");
    setTimeout(() => {
      if (!reRequest) {
        request();
        setReRequest(true);
      }
    }, 2000);
  };
  const backClick = e => {
    setChildrenSTL(" animation-children-back-click");
    setAtnActionSTL("container-all-back-click");
  };

  if (type === "contacto") {
    return (
      <div className="container-all">
        <div className="container-previews">
          <h1 className="title">{title}</h1>
          <Contacto />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`container-all container-all-${type}  ${btnActionSTL}`}>
        <div
          className={`animation-children animation-children-${type} ${childrenSTL}`}
        >
          <button onClick={backClick}>regresar</button>
          {children}
        </div>

        <button onClick={click} className={`btn-action btn-action-${type}`}>
          <div className={`container-previews container-previews-${type}`}>
            <div className={`title-previews title-previews-${type}`}>
              <h2>{title}</h2>
            </div>
          </div>
        </button>
      </div>

      <style jsx global>{`
        .container-all {
          width: clamp(200px, 100000%, 600px);
          min-width: 600px;
          max-width: 100%;
          min-height: 300px;
          max-height: auto;
          box-sizing: border-box;
          overflow: hidden;
          transition: width, height, 0.5s;
          margin: 10px;
        }
        .animation-children {
          width: 0;
          height: 0;
          overflow: hidden;
          transition: height, width, top, bottom, 2s;
        }
        .container-previews {
          transition: width, height, 0.5s;
          position: relative;
          z-index: 1;
          color: ${color.gris};
          width: 70%;
          height: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: clamp(1.5rem, 1vw, 2rem);
          background: rgba(222, 142, 255, 0.13);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
          border: 1px solid rgba(222, 142, 255, 1);
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
          transition: width, height, 0.5s;
        }
        .btn-action::after {
          content: "";
          position: absolute;
          background: ${color.primario};
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(140, 1, 90, 1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
          overflow: hidden;
          inset: 4px;
          animation: cambiar 2.5s ease-in-out infinite;
        }
        .btn-action:hover::after {
          cursor: pointer;
        }
        .btn-action::before {
          content: "";
          position: absolute;
          height: 70%;
          width: 110%;
          background: ${color.naranja};
          animation: animation 4s linear infinite;
        }

        .animation-children-click {
          height: 100%;
          width: auto;
        }
        .animation-children-back-click {
          width: 0;
          height: 0;
        }
        .container-all-click {
          width: 100%;
        }
        .container-all-back-click {
          width: clamp(200px, 100%, 600px);
        }

        .btn-action-hobbies::after {
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(140, 1, 1500, 1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
        }

        .btn-action-FormacionAcademica::after {
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(114, 209, 229, 1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
        }

        .btn-action-proyectos::after {
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(140, 1, 1500, 1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
        }
      `}</style>
    </>
  );
};

export default AnimationHome;
function stylesSpecify(type) {
  switch (type) {
    case "skills":
      return `
      .container-previews {
        color: red;
      }`;
    case "hobbies":
      return `
      .container-previews {
        color: pink;
      }`;
    case "FormacionAcademica":
      return `
      .container-previews {
        color: green;
      }`;
    case "proyectos":
      return `
      .container-previews {
        color: blue;
      }`;

    default:
      return ``;
  }
}
