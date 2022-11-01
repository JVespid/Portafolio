import Head from "next/head";
import Navbar from "../components/index/Navbar";
import Main from "../components/index/main";
import Footer from "../components/footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  let key = 0;

  const [prueba, setPrueba] = useState([]);

  const pruebaGet = async () => {
    //return await fetch( 'https://jvespid.github.io/apis/portafolio/skills.json' ).then(data => data.json())
    const res = await axios.get("https://jvespid.github.io/apis/portafolio/skills.json");
    console.log(res.data);
    setPrueba( res.data); 
  }

  useEffect(() => {
    pruebaGet();
  }, []);

  return (
    <>
      <Head>
        <title>Inicio-Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <header>
        <div className="header-container">
          <div className="description"></div>
          <div className="foto"></div>
        </div>
        <div className="aboutMy">
          <div className="aboutMy-title"></div>
          <div className="aboutMy-description"></div>
        </div>
      </header>

      <main>
        <Main></Main>

        <div className="pruebas">
          {prueba? prueba.map((item) => (
            <div key={key++}> 
              <p>{item.skill} -- {item.description}</p>
            </div>
          ) ) : null}
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}
