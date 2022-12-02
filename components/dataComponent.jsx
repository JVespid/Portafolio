/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

import { useContext, useEffect, useState, useRef, createRef } from "react";
import { globalContext } from "../context/global/globalState";
import stl from "../styles/dataComponent.module.scss";

const DataComponent = ({ type, typeComponent, title, change }) => {
  const {
    clientWidthItems,
    setClientWidthItems,
    skills,
    hobbies,
    FormacionAcademica,
    proyectos,
  } = useContext(globalContext);

  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(true);

  const [style, setStyle] = useState(``);
  const [styleMap, setStyleMap] = useState(``);
  const [styleItem, setStyleItem] = useState(``);
  const contentMap = useRef([]);
  const items = useRef([]);

  const [Map, setMap] = useState(contentMap.current);

  //const Map = contentMap.current.clientWidth;
  const desplegable = items.current.clientWidth;

  const scrollRight = () => {
    let preview = contentMap.current.scrollLeft;

    contentMap.current.scrollLeft += contentMap.current.offsetWidth;

    setTimeout(() => {
      preview = contentMap.current.scrollLeft - preview;
      if (preview < contentMap.current.offsetWidth) {
        setVisibleRight(false);
      } else {
        setVisibleRight(true);
      }
    }, 650);
    setVisibleLeft(true);
  };

  const scrollLeft = () => {
    contentMap.current.scrollLeft -= contentMap.current.offsetWidth;

    setTimeout(() => {
      if (contentMap.current.scrollLeft <= contentMap.current.offsetWidth / 1.5)
        setVisibleLeft(false);
      else setVisibleLeft(true);
    }, 500);
    setVisibleRight(true);
  };

  let data;
  switch (type) {
    case "skills": {
      data = skills;
      break;
    }
    case "hobbies": {
      data = hobbies;
      break;
    }
    case "FormacionAcademica": {
      data = FormacionAcademica;
      break;
    }
    case "proyectos": {
      data = proyectos;
      break;
    }
    case "Contacto":
      break;
  }

  useEffect(() => {
    if (typeComponent == 2) {
      setStyle(
        `${stl.content} ${stl[type + "_content"]} ${stl[type + "_content_2"]} ${
          stl.content_2
        }`
      );
      setStyleMap(
        `${stl.map} ${stl[type + "_map"]} ${stl[type + "_map_2"]} ${stl.map_2}`
      );
      setStyleItem(
        `${stl.items} ${stl[type + "_item"]}  ${stl[type + "_item_2"]} ${
          stl.items_2
        }`
      );
    } else {
      setStyle(`${stl.content} ${stl[type + "_content"]} `);
      setStyleMap(`${stl.map} ${stl[type + "_map"]}`);
      setStyleItem(`${stl.items} ${stl[type + "_item"]}`);
    }
  }, []);

  useEffect(() => {
    setMap(contentMap.current.clientWidth);
  }, [change]);

  useEffect(() => {
    let desplegable = items.current.clientWidth;
    if (
      (clientWidthItems === 0 || clientWidthItems === undefined) &&
      desplegable !== 0
    ) {
      setClientWidthItems(desplegable);
    }
  }, [desplegable]);

  const click = () => {
    if (typeComponent == 2) {
      setStyle(
        `${stl.content} ${stl[type + "_content"]} ${stl[type + "_content_2"]} ${
          stl.content_2
        } ${stl.content_click}`
      );
      setStyleMap(
        `${stl.map} ${stl[type + "_map"]} ${stl.map_2} ${
          stl[type + "_map_2"]
        } ${stl.map_click}`
      );
      setStyleItem(
        `${stl[type + "_item"]} ${stl.items} ${stl.items_2} ${
          stl[type + "_item_2"]
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
        {clientWidthItems * data.length > Map &&
        typeComponent == 1 &&
        visibleLeft ? (
          <div className={stl.leftBtn}>
            <button onClick={scrollLeft}>{"<<"}</button>
          </div>
        ) : null}
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

        {clientWidthItems * data.length > Map &&
        typeComponent == 1 &&
        visibleRight ? (
          <div className={stl.rightBtn}>
            <button onClick={scrollRight}>{">>"}</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DataComponent;
