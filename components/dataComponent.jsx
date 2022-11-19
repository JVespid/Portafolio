/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import FormacionAcademica from "./subDataComponents/formacionAcademica";
import Hobbies from "./subDataComponents/hobbies";
import Proyectos from "./subDataComponents/proyectos";
import Skills from "./subDataComponents/skills";

const DataComponent = ({ data, type, typeComponent, request, title }) => {
  switch (type) {
    case "skills": {
      return (
        <>
          <div className="container">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="content">
              <Skills data={data} typeComponent={typeComponent} />
            </div>
          </div>

          <style jsx>{`
            .content {
              width: 100%;
              height: auto;
              display: flex;
            }
          `}</style>
        </>
      );
    }
    case "hobbies": {
      return (
        <>
          <div className="container">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="content">
              <Hobbies data={data} typeComponent={typeComponent} />
            </div>
          </div>

          <style jsx>{``}</style>
        </>
      );
    }
    case "FormacionAcademica": {
      return (
        <>
          <div className="container">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="content">
              <FormacionAcademica data={data} typeComponent={typeComponent} />
            </div>
          </div>
        </>
      );
    }
    case "proyectos": {
      return (
        <>
          <div className="container">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="content">
              <Proyectos data={data} typeComponent={typeComponent} />
            </div>
          </div>
        </>
      );
    }

    default: {
      return (
        <div className="errorLoad">
          <h3>Error al cargar los datos, intentarlo de nuevo</h3>
          <button onClick={request}>Reintentar</button>
        </div>
      );
    }
  }
};

export default DataComponent;
