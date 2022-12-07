import React from "react";
import stl from "./../styles/index.module.scss";
import Router from "next/router";

const Pruebas = () => {
  const router = Router;
  const redirect = () => {
    router.push("/home");
  };
  const redirectAuto = () => {
    setTimeout(() => {
      redirect();
    }, 38500);
  };

  React.useEffect(() => {
    redirectAuto();
  }, []);

  return (
    <div className={stl.body}>
      <button onClick={redirect}>{"saltar >>"}</button>
    </div>
  );
};

export default Pruebas;
