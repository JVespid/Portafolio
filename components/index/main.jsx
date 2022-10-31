import React from "react";

import SkillsComponent from "./subComponents/skillsComponent";
import HobbiesComponent from "./subComponents/hobbiesComponent";
import FormacionAcademicaComponent from "./subComponents/formacionAcademicaComponent";
import ExperienciaProfesionalComponent from "./subComponents/experienciaProfesionalComponent";
import ContactoComponent from "./subComponents/contactoComponent";

import LayoutComponents from "../layoutComponents";
const Main = () => {
  return (
    <>
      <LayoutComponents url="/profile/skills" title="Skills">
        <SkillsComponent></SkillsComponent>
      </LayoutComponents>

      <LayoutComponents url="/profile/hobbies" title="Hobbies">
        <HobbiesComponent></HobbiesComponent>
      </LayoutComponents>

      <LayoutComponents
        url="/profile/formacionAcademica"
        title="Formación académica"
      >
        <FormacionAcademicaComponent></FormacionAcademicaComponent>
      </LayoutComponents>

      <LayoutComponents
        url="/profile/experienciaProfesional"
        title="Experiencia profesional"
      >
        <ExperienciaProfesionalComponent></ExperienciaProfesionalComponent>
      </LayoutComponents>

      <LayoutComponents url="/profile/contacto" title="Contacto">
        <ContactoComponent></ContactoComponent>
      </LayoutComponents>
    </>
  );
};

export default Main;
