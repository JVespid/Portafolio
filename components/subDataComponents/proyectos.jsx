/* eslint-disable @next/next/no-img-element */
import React from "react";
import estilos from "../../styles/stl";
const { color } = estilos();

const Proyectos = ({ data, typeComponent }) => {
  const styleGeneral = styleGeneralF();

  switch (typeComponent) {
    case 1: {
      return (
        <>
          <div className="proyectos general-content">
            {data.map(item => (
              <div className="proyectos-item items" key={item.id}>
                <img src={item.img} alt="imagen del proyecto" />
                <h3>{item.name}</h3>
                <p>
                  {item.description}
                  <a href={`${item.link}`} target="_blank" rel="noreferrer">
                    {"LInk"}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <style jsx>{`
            .proyectos-item {
              min-width: clamp(100px, 100%, 300px);
              max-width: clamp(100px, 100%, 300px);
              height: auto;
            }
            .proyectos-item h3 {
              height: 60px;
              top: calc(100% - 60px);
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
          <div className="proyectos general-content">
            {data.map(item => {
              if (!item.numberPages) {
                return (
                  <div className="proyectos-item items" key={item.id}>
                    <img src={item.img} alt="imagen del proyecto" />
                    <h3>{item.name}</h3>
                    <p>
                      {item.description}
                      <a href={`${item.link}`} target="_blank" rel="noreferrer">
                        {"LInk"}
                      </a>
                    </p>

                    <p className="proyectos-other1">{item.other1}</p>
                  </div>
                );
              } else return null;
            })}
          </div>
          <style jsx>{`
            .proyectos-item {
              min-width: clamp(100px, 100%, 300px);
              max-width: clamp(100px, 100%, 300px);
              height: auto;
            }
            .proyectos-item h3 {
              height: 60px;
              top: calc(100% - 60px);
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
          <div className="proyectos general-content">
            {data.map(item => {
              if (!item.numberPages) {
                return (
                  <div className="proyectos-item ite ms" key={item.id}>
                    <img src={item.img} alt="imagen del proyecto" />
                    <h3>{item.name}</h3>
                    <p>
                      {item.description}
                      <a href={`${item.link}`}> LInk </a>
                    </p>

                    <p className="proyectos-other1">{item.other1}</p>
                  </div>
                );
              } else return null;
            })}
          </div>
          <style jsx>{`
            .proyectos-item {
              min-width: clamp(100px, 100%, 300px);
              max-width: clamp(100px, 100%, 300px);
              height: auto;
            }
            .proyectos-item h3 {
              height: 60px;
              top: calc(100% - 60px);
            }
          `}</style>
          <style jsx>{`
            ${styleGeneral}
          `}</style>
        </>
      );
    }
  }
};

export default Proyectos;

function styleGeneralF() {
  return `.general-content {
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
