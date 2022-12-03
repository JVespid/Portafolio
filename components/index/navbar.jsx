import { useState, useContext } from "react";
import stl from "../../styles/navbar.module.scss";

import { indexContext } from "../../context/index/IndexState";

const Navbar = () => {
  const { pages } = useContext(indexContext);

  const [styleNav, setStyleNav] = useState(stl.nav);
  const [styleBloqued, setBloquedStyle] = useState(stl.complement);

  const [initialStyle, setInitialStyle] = useState(1);

  const ifClick = e => {
    if (initialStyle == 1) {
      setInitialStyle(initialStyle + 1);
      firstClick(e);
    }
    if (initialStyle == 2) {
      setInitialStyle(initialStyle - 1);
      secondClick(e);
    }
  };
  const ifClickLi = e => {
    if (initialStyle == 2) {
      setInitialStyle(initialStyle - 1);
      secondClick(e);
    }
  };

  const firstClick = e => {
    setStyleNav(stl["nav"] + " " + stl["navClick"]);
    setBloquedStyle(`${stl["complement"]} ${stl["complementClick"]}`);
  };
  const secondClick = e => {
    setStyleNav(stl["nav"]);
    setBloquedStyle(stl["complement"]);
  };

  return (
    <>
      <nav className={styleNav} id="nav">
        <button className={stl.burgerBtn} onClick={ifClick}>
          <div className={stl["burger"]}></div>
          <div className={stl.burger}></div>
          <div className={stl.burger}></div>
        </button>

        <ul>
          {pages
            ? pages.map(page => (
                <li
                  className={stl.item + " " + stl[`${page.type}`]}
                  key={page.id}
                >
                  <a href={`#${page.type}`}>
                    <button onClick={ifClickLi}>{page.title}</button>
                  </a>
                </li>
              ))
            : null}
        </ul>
      </nav>
      <div className={styleBloqued} onClick={ifClick}></div>
    </>
  );
};

export default Navbar;
