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
export const indexContext = React.createContext();

export const ContextGlobal = ({ children }) => {
  return (
    <>
      <indexContext.Provider value={bbdd}>{children}</indexContext.Provider>
    </>
  );
};
