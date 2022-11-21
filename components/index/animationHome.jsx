/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import Contacto from "../subDataComponents/contacto";
import estilos from "../../styles/stl";
const { color } = estilos();

/* eslint-disable @next/next/no-img-element */
const AnimationHome = ({ type, request, title, children }) => {
  const [childrenSTL, setChildrenSTL] = useState("");
  const [btnActionSTL, setAtnActionSTL] = useState("");
  const [btnStyle, setBtnStyle] = useState("");
  const [reRequest, setReRequest] = useState(false);

  const click = e => {
    setChildrenSTL(" animation-children-click");
    setAtnActionSTL("container-all-click");
    setBtnStyle("btn-action-click");
    setTimeout(() => {
      if (!reRequest) {
        request();
        setReRequest(true);
      }
    }, 1000);
  };
  const backClick = e => {
    setChildrenSTL(" animation-children-back-click");
    setAtnActionSTL("container-all-back-click");
    setBtnStyle("btn-action-back-click");
    setTimeout(() => {}, 2000);
  };

  if (type === "Contacto") {
    return (
      <div className={`container-all container-all-${type}`}>
        <div className={`container-previews container-previews-${type}`}>
          <h1 className={`title-previews title-previews-${type}`}>{title}</h1>
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

        <button
          onClick={click}
          className={`btn-action btn-action-${type} ${btnStyle}`}
        >
          <div className={`container-previews container-previews-${type}`}>
            <div className={`title-previews title-previews-${type}`}>
              <h2>{title}</h2>
            </div>
          </div>
        </button>
      </div>

      <style jsx global>{`
        .container-all {
          display: flex;
          position: relative;
          min-width: 700px;
          max-width: 100%;
          min-height: 300px;
          max-height: auto;
          box-sizing: border-box;
          transition: width, height, 5s;
          transition: display 0.5s;
        }
        .animation-children {
          display: none;
          width: 0;
          height: 0;
          transition: height, width, top, bottom, 1s;
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
        .container-previews div h2{
          
          font-size: clamp(1.5rem, 2.5vw, 2rem);
        }
        .btn-action {
          position: absolute;
          top: 0;
          width: 99%;
          height: 99%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          transition: top 2s;
          transition: width, height, 0.5s;

          border-radius: 15px 0;
        }
        .btn-action:hover {
          cursor: pointer;
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
          overflow: hidden;
          inset: 4px;
          background-size: 500% 500%;
          animation: cambiar 3s ease-in-out infinite;
        }
        .btn-action::before {
          content: "";
          position: absolute;
          height: 70%;
          width: 1800%;
        }
        .btn-action:hover::before {
          background: ${color.naranja};
          animation: animation 2s linear infinite;
        }
        .btn-action:hover::after {
          background-size: 500% 500%;
          animation: cambiar 1.5s ease-in-out infinite;
        }

        .animation-children-click {
          height: 100%;
          width: 14000px;
          max-width: 90%;
          display: inline-block;
          margin: auto;
        }
        .animation-children-back-click {
          width: 0;
          height: 0;
          display: none;
        }
        .container-all-click {
          width: 100%;
        }
        .container-all-back-click {
          width: clamp(200px, 100%, 500px);
        }

        .btn-action-click {
          top: 120%;
        }
        .btn-action-back-click {
          top: 0;
        }

        .btn-action-hobbies::after {
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(253, 235, 149,1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
          animation: cambiar 3.5s ease-in-out infinite;
        }

        .btn-action-FormacionAcademica::after {
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(114, 209, 229, 1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
          animation: cambiar 2.5s ease-in-out infinite;
        }

        .btn-action-proyectos::after {
          background: linear-gradient(
            45deg,
            rgba(30, 30, 30, 1),
            rgba(140, 1, 1500, 1),
            rgba(30, 30, 30, 1)
          );
          background-size: 500% 500%;
          animation: cambiar 4s ease-in-out infinite;
        }

        .container-all-Contacto {
          width: 100%;
          height: auto;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container-previews-Contacto {
          display: flex;
          flex-direction: column;
          align-items: center;

          justify-content: center;
        }

        @media (max-width: 1200px) {
          .container-all {
            min-width: 500px;
          }
          .container-all-click {
            width: 100%;
          }
          .container-all-back-click {
            width: clamp(200px, 95%, 500px);
          }
        }
        @media (max-width: 965px) {
          
        .btn-action::after {
          background-size: 500% 500%;
          animation: cambiar 2.5s ease-in-out infinite;
        }
        .btn-action::before {
          background: ${color.naranja};
          animation: animation 2s linear infinite;
        }
        }

        @media (max-width: 720px) {
          .container-all {
            min-width: 300px;
          }
          .container-all-click {
            width: 100%;
          }
          .container-all-back-click {
            width: clamp(200px, 95%, 300px);
          }
        }

        @media (max-width: 320px) {
          .container-all {
            min-width: 200px;
          }
          .container-all-click {
            width: 100%;
          }
          .container-all-back-click {
            width: clamp(200px, 95%, 200px);
          }
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
