/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState, useRef } from "react";
import { indexContext } from "../context/index/IndexState";
import stl from "../styles/dataComponent.module.scss";

const DataComponent = ({ type, typeComponent, change }) => {
  const { clientWidthItems, setClientWidthItems, state } =
    useContext(indexContext);

  const [styleMap, setStyleMap] = useState(``);
  const [styleItem, setStyleItem] = useState(``);
  let data = state[`${type}`];

  const contentMap = useRef([]);
  const items = useRef([]);

  // este elemento se ejecuta cuando cambia la información solicitada
  // también este useEffect es para que cambien las clases predeterminadas de algunos elementos del componente para cambiar los estilos usados

  useEffect(() => {
    data = state[`${type}`];
    
    if (typeComponent == 2) {
      setStyleMap(
        `${stl.map} ${stl[type + "_map"]} ${stl[type + "_map_2"]} ${stl.map_2}`
      );
      setStyleItem(
        `${stl.items} ${stl[type + "_item"]}  ${stl[type + "_item_2"]} ${
          stl.items_2
        }`
      );
    } else {
      setStyleMap(`${stl.map} ${stl[type + "_map"]}`);
      setStyleItem(`${stl.items} ${stl[type + "_item"]}`);
    }
  }, [type]);


  // estas funciones se ejecutan cuando se hace click en cualquier botón
  const click = () => {
    if (typeComponent == 2) {
      setStyleMap(
        `${stl.map} ${stl[type + "_map"]} ${stl.map_2} ${
          stl[type + "_map_2"]
        } ${stl.map_click}`
      );
      setStyleItem(
        ` ${stl.items} ${stl[type + "_item"]} ${stl.items_2} ${
          stl[type + "_item_2"]
        } ${stl.items_click}`
      );
    }
  };

  return (
    <>
      <div className={styleMap} ref={contentMap}>
        {data.map(item => (
          <button
            className={styleItem}
            key={item.id}
            onClick={click}
            ref={items}
          >
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
                {item.link && item.name ? (
                  <div className={stl.link}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {` ir a (> ${item.name} <)`}
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}
            {item.other2 && typeComponent != 1 ? (
              <>
                <div className={stl.other1_contain}>
                  <div className={stl.other1Title}>
                    <p>{item.other1Title}</p>
                  </div>
                  <div className={stl.other1}>
                    <p>{item.other1}</p>
                  </div>
                </div>
              </>
            ) : null}
            {item.other2 && typeComponent != 1 ? (
              <>
                <div className={stl.other2_contain}>
                  <div className={stl.other2Title}>
                    <p>{item.other2Title}</p>
                  </div>
                  <div className={stl.other2}>
                    <p>{item.other2}</p>
                  </div>
                </div>
              </>
            ) : null}
          </button>
        ))}
      </div>
    </>
  );
};

export default DataComponent;
