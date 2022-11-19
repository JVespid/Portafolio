/* eslint-disable @next/next/no-img-element */
import React from "react";
import estilos from "../../styles/stl";
const { color } = estilos();

const Skills = ({ data, typeComponent }) => {
  const styleGeneral = styleGeneralF();
  switch (typeComponent) {
    case 1: {
      return (
        <>
          <div className="skills general-content">
            {data.map(item => (
              <div className="skill-item items" key={item.id}>
                {/*tiene que ser imágenes cuadradas */}
                <img src={item.img} alt="imagen de la skill" />
                <h3 className="skill-h2">
                  {/*  no acepta palabras de mas de 13 letras (limitar)*/}
                  {item.skill}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <style jsx>{`
            .skill-item {
              min-width: clamp(100px, 100%, 150px);
              max-width: clamp(100px, 100%, 150px);
              fit-content: cover;
            }
          `}</style>
          <style jsx>{`
            ${styleGeneral}
          `}</style>
        </>
      );
    }
    case 2: {
      return (
        <>
          <div className="skills general-content">
            {data.map(item => {
              if (!item.numberPages) {
                return (
                  <div className="skill-item items" key={item.id}>
                    {/*tiene que ser imágenes cuadradas */}
                    <img src={item.img} alt="imagen de la skill" />
                    <h3 className="skill-h2">
                      {/*  no acepta palabras de mas de 13ss letras (limitar)*/}
                      {item.skill}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                );
              } else return null;
            })}
          </div>
          <style jsx>{`
            .skill-item {
              min-width: clamp(100px, 100%, 150px);
              max-width: clamp(100px, 100%, 150px);
              fit-content: cover;
            }
          `}</style>
          <style jsx>{`
            ${styleGeneral}
          `}</style>
        </>
      );
    }

    default: {
      return (
        <>
          <div className="skills general-content">
            {data.map(item => {
              if (!item.numberPages) {
                return (
                  <div className="skill-item items" key={item.id}>
                    {/*tiene que ser imágenes cuadradas */}
                    <img src={item.img} alt="imagen de laa skill" />
                    <h3 className="skill-h2">
                      {/*  no acepta palabras de mas de 13 letras (limitar)*/}
                      {item.skill}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                );
              } else return null;
            })}
          </div>
          <style jsx>{`
            .skill-item {
              min-width: clamp(100px, 100%, 150px);
              max-width: clamp(100px, 100%, 150px);
              fit-content: cover;
            }
          `}</style>
          <style jsx global>{`
            ${styleGeneral}
          `}</style>
        </>
      );
    }
  }
};

export default Skills;

function styleGeneralF() {
  return `

    .general-content {
      position: relative;
      z-index: 1;
      width: 100%;
      height: clamp(100px, auto, 150px);
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      justify-content: space-around;
      align-items: center;
      margin: 10px auto;
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    .items {
      margin: 20px auto;
      height: auto;
      display: flex;
      flex-direction: column;
      position: relative;
      background-color: ${color.gris};
      position: relative;
      cursor: pointer;
      overflow: hidden;
      -webkit-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 10px 10px 23px 0px rgba(0, 0, 0, 0.25);
    }

    .items img {
      width: clamp(100px, 100%, 100%);
      height: auto;
      position: relative;
      transition: 0.25s;
      top: 0;

      fit-content: cover;
    }

    .items p {
      position: absolute;
      top: -100px;
      z-index: -1;
      transition: 0.25s;
      width: calc(100% - 5px);
      background-color: ${color.blanco};
      display: flex;
      justify-content: center;
      overflow: hidden;
      padding-left: 5px;
      padding-top: 10px;
      box-sizing: content-box;
      visibility: hidden;
    }

    .items h3 {
      width: calc(100% - 5px);
      height: 40px;
      background-color: ${color.blanco};
      padding-left: 5px;
      position: absolute;
      display: flex;
      justify-content: flex-start;
      transition: 0.25s;
      align-items: center;
      align-content: center;
      top: calc(100% - 40px);
      text-overflow: ellipsis;
    }

    a {
      text-decoration: none;
      color: ${color.naranja};
    }

    .items:hover h3 {
      padding-left: 10px;
      width: calc(100% - 10px);
    }

    .items:hover img {
      top: -35px;
      -webkit-box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 1px 0px 23px 0px rgba(0, 0, 0, 0.25);
    }

    .items:hover p {
      display: flex;
      flex-direction: column;
      justify-content: center;

      visibility: visible;
      top: 100%;
      z-index: 1000;
      -webkit-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
    }

    .items:hover {
      overflow: visible;
      -webkit-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 10px 0px 23px 0px rgba(0, 0, 0, 0.25);
    }`;
}
