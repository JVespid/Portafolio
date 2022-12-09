/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useRef } from "react";
import Router from "next/router";
import disableScroll from "disable-scroll";
import useWindowSize from "../hooks/useWindowSize";

import stl from "../styles/layoutC.module.scss";
import DataComponent from "./dataComponent";

import { indexContext } from "../context/index/IndexState";
import { motion } from "framer-motion";

const LayoutComponents = () => {
  const router = Router;

  const { width } = useWindowSize();
  const { getChangeData, pages } = useContext(indexContext);

  const [iterator, setIterator] = useState(0);
  const [page, setPage] = useState(pages[iterator]);
  const [type, setType] = useState(page.type);
  const [title, setTitle] = useState(page.title);

  const dataC = useRef();
  const [widthDataC, setWidthDataC] = useState(0);

  const redirect = () => {
    const url = `/moreInfo?type=${type}`;
    router.push(`${url}`);
  };
  const request = () => {
    if (type != "Contacto") getChangeData(type);
  };

  useEffect(() => {
    setPage(pages[iterator]);
  }, [iterator]);

  useEffect(() => {
    setType(page.type);
    setTitle(page.title);
  }, [page]);

  // código para los estilos css
  const [change, setChange] = useState(0);
  const [dataContentStl, setDataContent] = useState(``);
  const [dataStl, setData] = useState(``);
  const [buttonsStl, setButtons] = useState(``);

  const changeData = () => {
    setChange(change + 1);
  };

  const click = () => {
    setDataContent(`${stl.dataComponent_click}`);
    setData(`${stl.data_click}`);
    setButtons(`${stl.buttons_click}`);
    changeData();
  };

  const backClick = e => {
    setDataContent(` ${stl.dataComponent_click_back}`);
    setData(``);
    setButtons(``);
    changeData();
  };

  const mouseOver = e => {
    setWidthDataC(dataC.current.offsetWidth);
    console.log(e.target.scrollLeft);
  };

  return (
    <>
      <section
        className={`${stl.container_all} ${stl["container_all_" + type]} ${
          stl.layoutComponents
        } ${stl[type]}`}
        id={`${type}`}
      >
        {pages.map((page, index) => {
          if (page.type != "Contacto")
            return (
              <button
                className={`${stl.btn_action} ${
                  stl["btn_action_" + page.type]
                }`}
                key={page.id}
                onClick={() => {
                  changeData();
                  setIterator(index);
                  click();
                }}
              >
                <h2>{page.title}</h2>
              </button>
            );
        })}
      </section>

      <section className={`${stl.dataComponent} ${dataContentStl}`}>
        <div className={stl.title}>
          <h3>{title}</h3>
        </div>
        {width > 720 ? (
          <motion.div
            className={`${stl.data} ${dataStl}`}
            onPointerOver={mouseOver}
            ref={dataC}
          >
            <DataComponent
              type={type}
              typeComponent={1}
              change={change}
              widthDataC={widthDataC}
              width={width}
            />
          </motion.div>
        ) : (
          <div className={`${stl.data} ${dataStl}`}>
            <DataComponent
              type={type}
              typeComponent={1}
              change={change}
              width={width}
            />
          </div>
        )}

        <div className={`${stl.buttons} ${buttonsStl}`}>
          <button onClick={backClick} className={stl.request}>
            cerrar{" "}
          </button>
          <button onClick={request} className={stl.request}>
            recargar{" "}
          </button>
          <button onClick={redirect} className={stl.redirect}>
            {"Ver mas ->"}
          </button>
        </div>
      </section>

      <section className=""></section>
    </>
  );
};

export default LayoutComponents;

const Children = ({ type, request, redirect, title, change }) => {
  return (
    <>
      <div className={stl.bar}>
        {type != "contacto" ? (
          <button className={stl.request} onClick={request}>
            recargar
          </button>
        ) : null}

        <button className={stl.redirect} onClick={redirect}>
          {"Ver más ->"}
        </button>
      </div>
    </>
  );
};
