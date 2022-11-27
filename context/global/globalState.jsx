import React, { useReducer, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
import axios from "axios";

const methods = {
  Get_Data: "GET_DATA",
  SET_Data: "SET_DATA",
  SET_PRUEBA: "SET_PRUEBA",
  SET_CHANGE_DATA_GENERAL: "SET_CHANGE_DATA_GENERAL",
};

export const globalContext = createContext();

export const GlobalState = ({ children }) => {
  const initialState = {
    valuePrueba: "wa ha ha",

    pages: [
      { id:uuidv4(), title: "Skills", type: "skills" },
      { id:uuidv4(), title: "Hobbies", type: "hobbies" },
      { id:uuidv4(), title: "Formación Académica", type: "FormacionAcademica" },
      { id:uuidv4(), title: "Proyectos", type: "proyectos" },
      { id:uuidv4(), title: "Contacto", type: "Contacto" },
    ],
    
    skills: [],
    hobbies: [],
    FormacionAcademica: [],
    proyectos: [],

    users: [],
    prueba: "",
  };

  const [state, disPatch] = useReducer(GlobalReducer, initialState);

  const action1 = async () => {
    const res = await axios("https://reqres.in/api/users");
    disPatch({
      type: methods.Get_Data,
      payload: res.data.data,
    });
  };
  const action2 = prueba => {
    disPatch({
      type: methods.SET_PRUEBA,
      payload: prueba,
    });
  };
  const getChangeData = async type => {
    const range = typeRange(type);
    const res = await axios.get(`/api/${type}/data/?range=${range}`);
    disPatch({
      type: methods.SET_CHANGE_DATA_GENERAL,
      dataToChange: type,
      payload: JSON.parse(res.data),
    });
  };

  return (
    <globalContext.Provider
      value={{
        state,
        pages: state.pages,
        skills: state.skills,
        hobbies: state.hobbies,
        FormacionAcademica: state.FormacionAcademica,
        proyectos: state.proyectos,
        users: state.users,
        prueba: state.prueba,
        valuePrueba: state.valuePrueba,
        action1,
        action2,
        getChangeData,
      }}
    >
      <>{children}</>
    </globalContext.Provider>
  );
};

const GlobalReducer = (state, action) => {
  const { payload, type, dataToChange } = action;

  switch (type) {
    case methods.Get_Data: {
      return {
        ...state,
        users: payload,
      };
    }
    case methods.SET_PRUEBA: {
      return {
        ...state,
        prueba: payload,
      };
    }
    case methods.SET_CHANGE_DATA_GENERAL: {
      switch (dataToChange) {
        case "skills": {
          return {
            ...state,
            skills: payload,
          };
        }
        case "hobbies": {
          return {
            ...state,
            hobbies: payload,
          };
        }
        case "FormacionAcademica": {
          return {
            ...state,
            FormacionAcademica: payload,
          };
        }
        case "proyectos": {
          return {
            ...state,
            proyectos: payload,
          };
        }
      }
      break;
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

const typeRange = type => {
  const range = {
    FormacionAcademica: 6,
    proyectos: 7,
  };
  return range[type] ?? 9;
};
