/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContactoComponent from "./contactoComponent";

const DataComponent = ({ data, type }) => {
  if (type === "contacto") {
    return <ContactoComponent />;
  }

  if (type === "skills") {
    return (
      <>
        <div className="skills general-content">
          {data
            ? data.map(item => (
                <div className="skill-item items" key={item.id}>
                  <img src={item.img} alt="imagen de la skill" />
                  <h3 className="skill-h2">{item.skill}</h3>
                  <p className="skill-p">{item.description}</p>
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
            display: flex;
            flex-direction: column;
            border: 1px solid #000;

            position: relative;
          }
          .skill-item img {
            width: clamp(70px, 100%, 80px);
            height: auto;
            border-right: 1px solid rgb(0, 0, 0);
            border-bottom: 1px solid rgb(0, 0, 0);
            margin: 3px;
          }
          .skill-item h3 {
          }
          .skill-item p {
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
                <div className="hobbies-item items" key={item.id}>
                  <img src={item.img} alt="imagen de los hobbies" />
                  <h3 className="hobbies-h2">{item.hobbie}</h3>
                  <p className="hobbies-p">{item.description}</p>
                </div>
              ))
            : null}
        </div>

        <style jsx>{`
          .hobbies {
          }
          .hobbies-item {
          }
          .hobbies-item img {
            width: clamp(120px, 50%, 200px);
          }
          .hobbies-item h3 {
          }
          .hobbies-item p {
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
