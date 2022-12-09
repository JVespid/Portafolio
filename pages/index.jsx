import React from "react";
import stl from "./../styles/index.module.scss";
import Router from "next/router";

const Index = ({ query }) => {
  const text = query.text ? query.text : "Bienvenid@";

  const router = Router;

  const redirect = () => {
    if (text !== "Bienvenid@") router.push(`/${text}`);
    else router.push("/home");
  };
  const redirectAuto = () => {
    setTimeout(() => {
      redirect();
    }, 6000);
  };

  React.useEffect(() => {
    redirectAuto();
  }, []);

  return (
    <>
      <div className={stl.body}>
        <div className={stl.loader}>
          <div className={stl.scanner}>
            <span texted={text}>{text}</span>
          </div>
        </div>
        <button onClick={redirect}>{"saltar >>"}</button>
        <div className={stl.wrapper}>
          <div className={stl.circle}></div>
          <div className={stl.circle}></div>
          <div className={stl.circle}></div>
          <div className={stl.shadow}></div>
          <div className={stl.shadow}></div>
          <div className={stl.shadow}></div>
        </div>
      </div>
    </>
  );
};

export default Index;

export function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}
