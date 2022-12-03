/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Router from "next/router";

import stl from "../styles/layoutC.module.scss";
import DataComponent from "./dataComponent";

import { indexContext } from "../context/index/IndexState";
import Contacto from "./subDataComponents/contacto";

const LayoutComponents = () => {
  const router = Router;
  const { getChangeData, state, pages } = useContext(indexContext);
  const [iterator, setIterator] = useState(3);
  const [page, setPage] = useState(pages[iterator]);
  const [type, setType] = useState(page.type);
  const [title, setTitle] = useState(page.title);
  const [clicked, setClicked] = useState(false);

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
  const [childrenSTL, setChildrenSTL] = useState(``);
  const [btnActionSTL, setAtnActionSTL] = useState(``);
  const [btnStyle, setBtnStyle] = useState(``);
  const [change, setChange] = useState(false);

  const clickChange = () => {
    if (!change) {
      setChange(true);
    } else if (change) {
      setChange(false);
    }
  };
  const click = e => {
    setChildrenSTL(`${stl.animation_children_click}`);
    setAtnActionSTL(`${stl.container_all_click}`);
    setBtnStyle(`${stl.btn_action_click}`);
    clickChange();
  };
  const backClick = e => {
    setChildrenSTL(``);
    setAtnActionSTL(``);
    setBtnStyle(``);
    clickChange();
  };

  return (
    <>
      <section
        className={`${stl.container_all} ${
          stl["container_all_" + type]
        } ${btnActionSTL} ${stl.layoutComponents} ${stl[type]}`}
        id={`${type}`}
      >
        {pages.map((page, index) => {
          if (page.type != "Contacto")
            return (
              <button
                className={`${stl.btn_action} ${
                  stl["btn_action_" + page.type]
                } ${btnStyle}`}
                key={page.id}
                onClick={() => {
                  setIterator(index);
                }}
              >
                <h2>{page.title}</h2>
              </button>
            );
        })}
      </section>

      <section className="">
        <DataComponent
          type={type}
          title={title}
          change={change}
          typeComponent={1}
        />
      </section>

      <section className="">
        <div
          className={`${stl._children} ${
            stl["children_" + type]
          } ${childrenSTL}`}
        >
          <button onClick={backClick}>cerrar</button>
          <button onClick={backClick}>cerrar</button>
        </div>
      </section>

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
