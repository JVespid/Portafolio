import React from "react";

import LayoutComponents from "../layoutComponents";
const Main = ({ page }) => {

  return (
    <>
      <LayoutComponents
        title="Skills"
        type="skills"
        page={page}
        key="skills"
      />

      <LayoutComponents
        title="Hobbies"
        type="hobbies"
        page={page}
        key="hobbies"
      />

      <LayoutComponents
        title="Formación Académica"
        type="FormacionAcademica"
        page={page}
        key="FormacionAcademica"
      />

      <LayoutComponents
        title="Proyectos"
        type="proyectos"
        page={page}
        key="proyectos"
      />

      <LayoutComponents
        title="Contacto"
        type="Contacto"
        page={page}
        key="Contacto"
      />
    </>
  );
};

export default Main;
