/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import Contacto from "../subDataComponents/contacto";
import DataComponent from "../dataComponent";
import stl from "../../styles/animationHome.module.scss";

/* eslint-disable @next/next/no-img-element */
const AnimationHome = ({ type, request, title, redirect }) => {
  const [childrenSTL, setChildrenSTL] = useState(``);
  const [btnActionSTL, setAtnActionSTL] = useState(``);
  const [btnStyle, setBtnStyle] = useState(``);
  const [change, setChange] = useState(false);

  const clickChangeState = () => {
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
    clickChangeState();
  };
  const backClick = e => {
    setChildrenSTL(``);
    setAtnActionSTL(``);
    setBtnStyle(``);
    clickChangeState();
  };

  if (type === `Contacto`) {
    return (
      <section
        className={`${stl.container_all} ${stl["container_all_" + type]} ${
          stl.layoutComponents
        } ${stl[type]}`}
        id={`${type}`}
      >
        <div
          className={`${stl.container_previews} ${
            stl["container_previews_" + type]
          }`}
        >
          <div className={stl[`${type}_h2`]}>
            <h1
              className={`${stl.title_previews} ${
                stl["title_previews_" + type]
              }`}
            >
              {title}
            </h1>
          </div>
          <div className={stl[`${type}_content`]}>
            <Contacto />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>wa ha ah</section>
    </>
  );
};

export default AnimationHome;
