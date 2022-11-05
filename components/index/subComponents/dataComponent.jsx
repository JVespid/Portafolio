/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React, { createRef, useRef, useState, useEffect } from "react";
import ContactoComponent from "./contactoComponent";

const DataComponent = ({ data, type }) => {
  const ref_h3 = useRef([]);
  const ref_img = useRef([]);
  const ref_p = useRef([]);

    const style3 = {
      height: `${ref_img.current.clientHeight}px `,
    }
    
  

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
          .skills {
            position: relative;
            z-index: 1;
          }
          .skill-item {
            margin: 10px;

            background-color: red;
            min-width: clamp(100px, 20%, 150px);
            max-width: clamp(100px, 20%, 150px);

            display: flex;
            flex-direction: column;
          }
          .skill-item h3 {
            width: calc(100% - 5px);
            height: 40px;

            background-color: rgba(250, 250, 250, 1);

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
          .skill-item:hover h3 {
            padding-left: 10px;
            width: calc(100% - 10px);
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
                  <img src={item.img} alt="imagen de los hobbies" />
                  <h3 ref={ref_h3}>
                    {item.hobbie}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))
            : null}
        </div>

        <style jsx>{`
          .hobbies {
            position: relative;
            z-index: 1;
          }
          .hobbies-item {
            min-width: clamp(100px, 20%, 150px);
            max-width: clamp(100px, 20%, 150px);

            display: flex;
            flex-direction: column;

            position: relative;
          }
          .hobbies-item h3 {
            width: calc(100% - 5px);
            height: 40px;

            background-color: rgba(250, 250, 250, 1);

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
          .hobbies-item:hover h3 {
            padding-left: 10px;
            width: calc(100% - 10px);
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
                <div className="formacionAcademica-item items" key={item.id}>
                  <img src={item.img} alt="imagen de la formacionAcademica" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="link externo">
                    Link
                  </a>
                  <p className="formacionAcademica-other1">{item.other1}</p>
                  <p className="formacionAcademica-other2">{item.other2}</p>
                </div>
              ))
            : null}
        </div>

        <style jsx>{`
          .formacionAcademica {
          }
          .formacionAcademica-item {
          }
          .formacionAcademica-item img {
            width: clamp(120px, 50%, 200px);
          }
          .formacionAcademica-item h3 {
          }
          .formacionAcademica-item a {
          }
          .formacionAcademica-other1 {
          }
          .formacionAcademica-other2 {
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
                <div className="proyectos-item items" key={item.id}>
                  <img src={item.img} alt="imagen de la formacionAcademica" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="link externo">
                    Link
                  </a>
                </div>
              ))
            : null}
        </div>
        <style jsx>{`
          .proyectos {
          }
          .proyectos-item {
          }
          .proyectos-item img {
            width: clamp(120px, 50%, 200px);
          }
          .proyectos-item h3 {
          }
          .proyectos-item p {
          }
          .proyectos-item a {
          }
        `}</style>
      </>
    );
  }
};

export default DataComponent;
