/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import ContactoComponent from "./contactoComponent";

const DataComponent = ({ data, type, page, request }) => {
  if (type === "Contacto") {
    return <ContactoComponent />;
  }

  if (type === "skills") {
    return (
      <>
        <div className="skills general-content">
          {data ? (
            data.map(item => (
              <div className="skill-item items" key={item.id}>
                {/*tiene que ser imágenes cuadradas */}
                <img src={item.img} alt="imagen de la skill" />
                <h3 className="skill-h2">
                  {/*  no acepta palabras de mas de 13 letras (limitar)*/}
                  {item.skill}
                </h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <div className="errorLoad">
              <h3>Error al cargar los datos, intentarlo de nuevo</h3>
              <button onClick={request}>Reintentar</button>
            </div>
          )}
        </div>
      </>
    );
  }

  if (type === "hobbies") {
    return (
      <>
        <div className="hobbies general-content">
          {data ? (
            data.map(item => (
              <div className="hobbies-item items" key={item.id}>
                <img src={item.img} alt="imagen de los hobbies" />
                <h3>{item.hobbie}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <div className="errorLoad">
              <h3>Error al cargar los datos, intentarlo de nuevo</h3>
              <button onClick={request}>Reintentar</button>
            </div>
          )}
        </div>
      </>
    );
  }

  if (type === "FormacionAcademica") {
    return (
      <>
        <div className="formacionAcademica general-content">
          {data ? (
            data.map(item => (
              <div className="formacionAcademica-item items" key={item.id}>
                <img src={item.img} alt="imagen de la formacionAcademica" />
                <h3>{item.name}</h3>
                <p>
                  {item.description}
                  <a href={`${item.link}`}> LInk </a>
                </p>

                {page === "FormacionAcademica" ? (
                  <>
                    <p className="formacionAcademica-other1">{item.other1}</p>
                    <p className="formacionAcademica-other2">{item.other2}</p>
                  </>
                ) : null}
              </div>
            ))
          ) : (
            <div className="errorLoad">
              <h3>Error al cargar los datos, intentarlo de nuevo</h3>
              <button onClick={request}>Reintentar</button>
            </div>
          )}
        </div>
      </>
    );
  }

  if (type === "proyectos") {
    return (
      <>
        <div className="proyectos general-content">
          {data ? (
            data.map(item => (
              <div className="proyectos-item items" key={item.id}>
                <img src={item.img} alt="imagen de la formacionAcademica" />
                <h3>{item.name}</h3>
                <p>
                  {item.description}
                  <a href={`${item.link}`}> LInk </a>
                </p>

                {page === "proyectos" ? (
                  <>
                    <p className="formacionAcademica-other1">{item.other1}</p>
                  </>
                ) : null}
              </div>
            ))
          ) : (
            <div className="errorLoad">
              <h3>Error al cargar los datos, intentarlo de nuevo</h3>
              <button onClick={request}>Reintentar</button>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default DataComponent;
