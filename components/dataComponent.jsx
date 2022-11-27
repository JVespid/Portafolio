/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState } from "react";
import { globalContext } from "../context/global/globalState";
import stl from "../styles/dataComponent.module.scss";

const DataComponent = ({ type, typeComponent, title }) => {
  const [style, setStyle] = useState(
    `${stl.content} ${stl[type + "-content"]}`
  );
  const [styleMap, setStyleMap] = useState(`${stl.map} ${stl[type + "-map"]}`);
  const [styleItem, setStyleItem] = useState(
    `${stl[type + "-item"]} ${stl.items}`
  );

  let data;
  switch (type) {
    case "skills": {
      const { skills } = useContext(globalContext);
      data = skills;
      break;
    }
    case "hobbies": {
      const { hobbies } = useContext(globalContext);
      data = hobbies;
      break;
    }
    case "FormacionAcademica": {
      const { FormacionAcademica } = useContext(globalContext);
      data = FormacionAcademica;
      break;
    }
    case "proyectos": {
      const { proyectos } = useContext(globalContext);
      data = proyectos;
      break;
    }
    case "Contacto":
      break;
  }
  useEffect(() => {
    if (typeComponent == 2) {
      setStyle(
        `${stl.content} ${stl[type + "-content"]} ${stl[type + "-content-2"]} ${
          stl.content_2
        }`
      );
      setStyleMap(
        `${stl.map} ${stl[type + "-map"]} ${stl[type + "-map-2"]} ${stl.map_2}`
      );
      setStyleItem(
        `${stl.items} ${stl[type + "-item"]}  ${stl[type + "-item-2"]} ${
          stl.items_2
        }`
      );
    }
  }, []);

  const click = () => {
    if (typeComponent == 2) {
      setStyle(
        `${stl.content} ${stl[type + "-content"]} ${stl[type + "-content-2"]} ${
          stl.content_2
        } ${stl.content_click}`
      );
      setStyleMap(
        `${stl.map} ${stl[type + "-map"]} ${stl.map_2} ${
          stl[type + "-map-2"]
        } ${stl.map_click}`
      );
      setStyleItem(
        `${stl[type + "-item"]} ${stl.items} ${stl.items_2} ${
          stl[type + "-item-2"]
        } ${stl.items_click}`
      );
    }
  };

  return (
    <>
      <div className={`${style}`}>
        <div className={stl.title}>
          <h2>{title}</h2>
        </div>

        <div className={styleMap}>
          {data.map(item => (
            <div className={styleItem} key={item.id} onClick={click}>
              {item.img ? (
                <div className={stl.img}>
                  <img src={item.img} alt={`imagen de la ${type}`} />
                </div>
              ) : null}

              {item.name ? (
                <div className={stl.name}>
                  <h3>{item.name}</h3>
                </div>
              ) : null}

              {item.description ? (
                <div className={stl.description}>
                  <p>{item.description}</p>
                </div>
              ) : null}

              {item.link ? (
                <div className={stl.link}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </div>
              ) : null}

              {item.other2 && typeComponent != 1 ? (
                <>
                  <div className={stl.other1Title}>
                    <p>{item.other1Title}</p>
                  </div>
                  <div className={stl.other1}>
                    <p>{item.other1}</p>
                  </div>
                </>
              ) : null}

              {item.other2 && typeComponent != 1 ? (
                <>
                  <div className={stl.other2Title}>
                    <p>{item.other2Title}</p>
                  </div>
                  <div className={stl.other2}>
                    <p>{item.other2}</p>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataComponent;
