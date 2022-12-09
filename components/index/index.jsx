import Head from "next/head";
import Navbar from "./navbar";
import Footer from "../footer";
import AboutMe from "./aboutMe";
import LayoutComponents from "../layoutComponents";

import stl from "../../styles/home.module.scss";
import { indexContext } from "../../context/index/IndexState";
import { useContext, useEffect } from "react";
import Contacto from "../subDataComponents/contacto";

export default function Home() {
  const { getChangeData, pages } = useContext(indexContext);

  useEffect(() => {
    pages.forEach(page => {
      if (page.type != "Contacto") {
        getChangeData(page.type);
      }
    });
  }, [pages]);

  return (
    <>
      <Head>
        <title>Inicio-Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ICONO.ico" />
      </Head>

      <Navbar />

      <AboutMe />

      <main className={stl.main}>
        <LayoutComponents />
      </main>

      <Contacto />

      <Footer></Footer>
    </>
  );
}
