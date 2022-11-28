/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Router from "next/router";

import stl from "../styles/layoutC.module.scss";
import AnimationHome from "./index/animationHome";

import { globalContext } from "../context/global/globalState";

const LayoutComponents = ({ title, type }) => {
  const router = Router;
  const { getChangeData, state } = useContext(globalContext);

  const redirect = type => {
    const url = `/moreInfo?type=${type}`;
    router.push(`${url}`);
  };

  const request = type => {
    getChangeData(type);
  };

  useEffect(() => {
    if (type != "Contacto" && state[type].length == 0) {
      request(type);
    }
  }, []);

  return (
    <>
      <AnimationHome
        request={() => {
          request(type);
        }}
        redirect={() => {
          redirect(type);
        }}
        type={type}
        title={title}
      ></AnimationHome>
    </>
  );
};

export default LayoutComponents;
