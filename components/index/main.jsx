import React from "react";

import LayoutComponents from "../layoutComponents";
const Main = ({ page }) => {
  return (
    <>
      <LayoutComponents
        url="/profile/skills"
        title="Skills"
        type="skills"
        page={page}
      />

      <LayoutComponents
        url="/profile/hobbies"
        title="Hobbies"
        type="hobbies"
        page={page}
      />

      <LayoutComponents
        url="/profile/formacionAcademica"
        title="Formación académica"
        type="formacionAcademica"
        page={page}
      />

      <LayoutComponents
        url="/profile/experienciaProfesional"
        title="Experiencia profesional"
        type="proyectos"
        page={page}
      />

      <LayoutComponents
        url="/profile/contacto"
        title="Contacto"
        type="contacto"
        page={page}
      />
    </>
  );
};

export default Main;
