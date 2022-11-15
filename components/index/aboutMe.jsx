/* eslint-disable @next/next/no-img-element */
import React from "react";

import estilos from "../../styles/stl";
const { color } = estilos();

const AboutMe = () => {
  return (
    <>
      <div className="header-container">
        <div className="aboutMy">
          <div className="aboutMy-title">
            <h3>Bernardo Abel Lopez Sanchez </h3> <p>Engineer Web FullStack</p>
          </div>
          <div className="aboutMy-description">
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dignissimos neque accusantium ducimus dicta beatae totam nostrum
              incidunt fugiat, explicabo minus doloribus laudantium at.
              Consequatur aliquam deleniti error sapiente velit. Voluptatum
              labore repellendus qui pariatur, corporis, expedita iste in
              eligendi dolores nemo doloremque quibusdam esse atque sed nihil
              nesciunt laudantium repudiandae explicabo. Deleniti ratione beatae
              fugiat nobis hic officia minima?
            </p>
          </div>
        </div>

        <div className="description"></div>
        <div className="foto">
          <img
            src="https://jvespid.github.io/apis//portafolio/img/aboutMe/JV.png"
            alt="foto de perfil"
          />
        </div>
      </div>
      <style jsx>{`
        .header-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
        }
        .aboutMy {
          width: clamp(200px, 80%, 1100px);
          margin: 30px auto;
          display: flex;
          flex-wrap: wrap;
        }
        .aboutMy .aboutMy-description,
        .aboutMy .aboutMy-title {
          display: flex;
          width: clamp(200px, 100%, 520px);
          align-content: center;
          margin: 0 auto;
          padding: 10px;
        }

        .aboutMy .aboutMy-title {
          display: flex;
          align-items: center;
          align-content: center;
          flex-direction: column;
        }
        .aboutMy .aboutMy-title h3 {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: ${color.blanco};
          margin: auto;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid ${color.blanco};
        }
        .aboutMy .aboutMy-title p {
          display: flex;
          flex-direction: column;
          color: ${color.gris};
          margin: auto;
          margin-top: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid ${color.blanco};
        }

        .aboutMy .aboutMy-description p {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: justify;
          margin: auto;
          color: ${color.blanco};
          padding-bottom: 10px;
          border-bottom: 1px solid ${color.blanco};
        }

        .foto {
          width: clamp(100px, 100%, 200px);
          height: clamp(100px, 100%, 200px);
          border-radius: 50%;
          overflow: hidden;
          margin: 25px auto;

          border: 2px solid ${color.naranja};
          border: 4px solid rgb(97, 96, 96);
        }
        .foto img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 800px) {
          .header-container {
            flex-direction: column;
          }
          .foto {
            order: -1;
            margin: 15px auto;
          }
        }

        @media (max-width: 1349px) {
          .aboutMy {
            width: clamp(200px, 80%, 550px);
          }
        }
      `}</style>
    </>
  );
};

export default AboutMe;
