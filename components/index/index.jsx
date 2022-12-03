import Head from "next/head";
import Navbar from "./navbar";
import Footer from "../footer";
import AboutMe from "./aboutMe";
import LayoutComponents from "../layoutComponents";

import stl from "../../styles/index.module.scss";
import { indexContext } from "../../context/index/IndexState";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { getChangeData, pages, state } = useContext(indexContext);

  const [stateData, setStateData] = useState(state)

  useEffect(() => {
    pages.forEach(page => {
      if (page.type != "Contacto") {
        getChangeData(page.type);
      }
    });
  }, [pages]);

  useEffect(() => {
    setStateData(state);
  }, [state]);

  console.log(state);
  return (
    <>
      <Head>
        <title>Inicio-Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ICONO.ico" />
      </Head>

      <Navbar />

      <header className={stl.header}>
        <AboutMe />
      </header>

      <main className={stl.main}>
        {stateData ? <LayoutComponents /> : null}
      </main>

      <div className={stl.up}>
        <a href="#nav">subir ^</a>
      </div>

      <Footer></Footer>
    </>
  );
}
