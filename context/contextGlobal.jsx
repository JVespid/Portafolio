import React from "react";

const bbdd = {
  valuePrueba: "wa ha ha",

  pages: [
    { tile: "Skills", type: "skills" },
    { tile: "Hobbies", type: "hobbies" },
    { tile: "Formación Académica", type: "FormacionAcademica" },
    { tile: "Proyectos", type: "proyectos" },
    { tile: "Contacto", type: "Contacto" },
  ],

};
export const globalContext = React.createContext();

export const ContextGlobal = ({ children }) => {
  return (
    <>
      <globalContext.Provider value={bbdd}>{children}</globalContext.Provider>
    </>
  );
};
