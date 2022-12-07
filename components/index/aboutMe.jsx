/* eslint-disable @next/next/no-img-element */
import React, { useContext, createRef, useRef } from "react";
import stl from "../../styles/aboutMe.module.scss";
import { indexContext } from "../../context/index/IndexState";

const AboutMe = () => {
  const { imgProfile } = useContext(indexContext);
  const refImg = createRef();

  const moveImage = useRef([]);
  moveImage.current = [];

  const clickChangeImage = e => {
    const value = e.target.value;
    const width = refImg.current.clientWidth;
    const move = width * value;
    refImg.current.scrollLeft = move;

    moveImage.current.forEach((moveImage1, index) => {
      moveImage1.style.backgroundColor = "rgba(240, 240, 240, 1)";
      if (index == value) {
        moveImage1.style.backgroundColor = "rgba(140, 1, 250, 1)";
      }
    });
  };

  const addToRefs = el => {
    if (el && !moveImage.current.includes(el)) {
      moveImage.current.push(el);
    }
  };
  return (
    <>
      <header className={stl.header}>
        <div className={stl.aboutMy}>
          <div className={stl.aboutMy_title}>
            <h3>Bernardo Abel Lopez Sanchez </h3>
            <div className={stl.animatedText}>
              <p>Engineer Web FullStack</p>
            </div>
          </div>

          <div className={stl.fotoContent}>
            <div className={stl.fotos} ref={refImg}>
              {imgProfile
                ? imgProfile.map((img, index) => (
                    <div className={stl.foto} key={img.id}>
                      <img
                        src={img.img}
                        alt={`foto de perfil ${index}`}
                        valor={index}
                      />
                    </div>
                  ))
                : null}
            </div>

            <div className={stl.buttons}>
              {imgProfile
                ? imgProfile.map((img, index) => (
                    <div
                      key={img.id + "-btn"}
                      className={`${stl.moveImage} img-${index}`}
                    >
                      <button
                        ref={addToRefs}
                        onClick={clickChangeImage}
                        value={index}
                      ></button>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>

        <div className={stl.aboutMy_description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            dignissimos neque accusantium ducimus dicta beatae totam nostrum
            incidunt fugiat, explicabo minus doloribus laudantium at.
            Consequatur aliquam deleniti error sapiente velit. Voluptatum labore
            repellendus qui pariatur, corporis, expedita iste in eligendi
            dolores nemo doloremque quibusdam esse atque sed nihil nesciunt
            laudantium repudiandae explicabo. Deleniti ratione beatae fugiat
            nobis hic officia minima?
          </p>
        </div>

        <div className={stl.description}></div>
      </header>
    </>
  );
};

export default AboutMe;
