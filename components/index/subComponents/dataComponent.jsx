/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React, { createRef, useRef, useState, useEffect } from "react";
import ContactoComponent from "./contactoComponent";

const DataComponent = ({ data, type, page }) => {
  const ref_h3 = useRef([]);
  const ref_img = useRef([]);
  const ref_p = useRef([]);

  const style3 = {
    height: `${ref_img.current.clientHeight}px `,
    width: `${ref_img.current.clientWidth}px `,
  };


  if (type === "contacto") {
    return <ContactoComponent />;
  }

  if (type === "skills") {
    return (
      <>
        <div className="skills general-content">
          {data
            ? data.map(item => (
                <div className="skill-item items" key={item.id} style={style3}>
                  {/*tiene que ser imágenes cuadradas */}
                  <img src={item.img} ref={ref_img} alt="imagen de la skill" />
                  <h3 className="skill-h2" ref={ref_h3}>
                    {/*  no acepta palabras de mas de 13 letras (limitar)*/}
                    {item.skill}
                  </h3>
                  <p ref={ref_p}>{item.description}</p>
                </div>
              ))
            : null}
        </div>

        <style jsx>{`
          .skill-item {
            min-width: clamp(100px, 100%, 150px);
            max-width: clamp(100px, 100%, 150px);
            fit-content: cover;
          }
        `}</style>
      </>
    );
  }

  if (type === "hobbies") {
    return (
      <>
        <div className="hobbies general-content">
          {data
            ? data.map(item => (
                <div
                  className="hobbies-item items"
                  key={item.id}
                  style={style3}
                >
                  <img
                    src={item.img}
                    ref={ref_img}
                    alt="imagen de los hobbies"
                  />
                  <h3>{item.hobbie}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            : null}
        </div>

        <style jsx>{`
          .hobbies-item {
            min-width: clamp(100px, 100%, 150px);
            max-width: clamp(100px, 100%, 150px);
            height: auto;
            fit-content: cover;
          }
        `}</style>
      </>
    );
  }

  if (type === "formacionAcademica") {
    return (
      <>
        <div className="formacionAcademica general-content">
          {data
            ? data.map(item => (
                <div
                  className="formacionAcademica-item items"
                  key={item.id}
                  style={style3}
                >
                  <img
                    src={item.img}
                    alt="imagen de la formacionAcademica"
                    ref={ref_img}
                  />
                  <h3>{item.name}</h3>
                  <p>
                    {item.description}
                    <a href={`${item.link}`}> LInk </a>
                  </p>

                  {page === "formacionAcademica" ? (
                    <>
                      <p className="formacionAcademica-other1">{item.other1}</p>
                      <p className="formacionAcademica-other2">{item.other2}</p>
                    </>
                  ) : null}
                </div>
              ))
            : null}
        </div>

        <style jsx>{`
          .formacionAcademica-item {
            min-width: clamp(100px, 100%, 300px);
            max-width: clamp(100px, 100%, 300px);
            height: auto;
            fit-content: cover;
          }
          .formacionAcademica-item h3 {
            height: 60px;
            top: calc(100% - 60px);
          }
        `}</style>
      </>
    );
  }

  if (type === "proyectos") {
    return (
      <>
        <div className="proyectos general-content">
          {data
            ? data.map(item => (
                <div
                  className="proyectos-item items"
                  key={item.id}
                  style={style3}
                >
                  <img
                    src={item.img}
                    alt="imagen de la formacionAcademica"
                    ref={ref_img}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            : null}
        </div>
        <style jsx>{`
          .proyectos-item {
            min-width: clamp(100px, 100%, 300px);
            max-width: clamp(100px, 100%, 300px);
            height: auto;
            fit-content: cover;
          }
          .proyectos-item h3 {
            height: 60px;
            top: calc(100% - 60px);
          }
        `}</style>
      </>
    );
  }
};

export default DataComponent;
