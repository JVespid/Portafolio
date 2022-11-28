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
      if (contentMap.current.scrollLeft <= preview) setVisibleRight(false);
      else {setVisibleRight(true);
      }
    }, 500);
    setVisibleLeft(true);
  };


  const scrollLeft = () => {
    //let preview = Objet.assign({},contentMap.current.scrollLeft);
    let preview = contentMap.current.scrollLeft;

    contentMap.current.scrollLeft -= clientWidthItems * 2.5;

    if (contentMap.current.scrollLeft - preview < clientWidthItems * 2.5)
      setVisibleLeft(false);
    else setVisibleLeft(true);
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
    } else {
      setStyle(`${stl.content} ${stl[type + "-content"]} `);
      setStyleMap(`${stl.map} ${stl[type + "-map"]}`);
      setStyleItem(`${stl.items} ${stl[type + "-item"]}`);
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
        {clientWidthItems * data.length > Map &&
        typeComponent == 1 &&
        visibleLeft ? (
          <div className={stl.leftBtn}>
            <button onClick={scrollLeft}>{"<<"}</button>
          </div>
        ) : null}
        <div className={styleMap} ref={contentMap}>
          {data.map(item => (
            <div
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
