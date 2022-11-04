import React from "react";


import LayoutComponents from "../layoutComponents";
const Main = () => {
  return (
    <>
      <LayoutComponents url="/profile/skills" title="Skills" type="skills" />

      <LayoutComponents url="/profile/hobbies" title="Hobbies" type="hobbies" />

      <LayoutComponents
        url="/profile/formacionAcademica"
        title="Formación académica"
        type="formacionAcademica"
      />

      <LayoutComponents
        url="/profile/experienciaProfesional"
        title="Experiencia profesional"
        type="proyectos"
      />

      <LayoutComponents
        url="/profile/contacto"
        title="Contacto"
        type="contacto"
      />
    </>
  );
};

export default Main;
