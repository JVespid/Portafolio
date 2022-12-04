/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useRef } from "react";
import Router from "next/router";
import disableScroll from "disable-scroll";
import useWindowSize from "../hooks/useWindowSize";

import stl from "../styles/layoutC.module.scss";
import DataComponent from "./dataComponent";

import { indexContext } from "../context/index/IndexState";
import Contacto from "./subDataComponents/contacto";

const LayoutComponents = () => {
  const router = Router;

  const { width } = useWindowSize();
  const { getChangeData, pages } = useContext(indexContext);

  const [iterator, setIterator] = useState(0);
  const [page, setPage] = useState(pages[iterator]);
  const [type, setType] = useState(page.type);
  const [title, setTitle] = useState(page.title);

  let dataC = useRef();

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
  const [change, setChange] = useState(false);
  const [dataContentStl, setDataContent] = useState(``);
  const [dataStl, setData] = useState(``);
  const [buttonsStl, setButtons] = useState(``);

  const changeData = () => {
    if (change) setChange(false);
    else setChange(true);
  };
  const click = e => {
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

  const mouseDown = e => {
    if (width > 850) {
      disableScroll.on();
    }
  };

  const mouseUp = e => {
    if (width > 850) {
      disableScroll.off();
    }
  };

  const pruebas = e => {
    if (e.deltaY > 0 && width > 850) {
      e.target.scrollLeft += 100;
    } else {
      e.target.scrollLeft -= 100;
    }
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
        <div className={stl.scrolling}>
          <p>{"<<<<"}</p>
          <p>{"<<"}</p>
          <p>{" Scroll"}</p>
          <p>{">> "}</p>
          <p>{">>>> "}</p>
        </div>

        <div className={stl.title}>
          <h3>{title}</h3>
        </div>

        <div
          className={`${stl.data} ${dataStl}`}
          onPointerOut={mouseUp}
          onPointerOver={mouseDown}
          onWheel={pruebas}
          ref={dataC}
        >
          <DataComponent type={type} typeComponent={1} change={change} />
        </div>

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

      <section className="">
        <Contacto />
      </section>
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
