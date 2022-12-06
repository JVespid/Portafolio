import React, { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
import axios from "axios";

const methods = {
  Get_Data: "GET_DATA",
  SET_Data: "SET_DATA",
  SET_PRUEBA: "SET_PRUEBA",
  SET_CHANGE_DATA_GENERAL: "SET_CHANGE_DATA_GENERAL",
  SET_CHANGE_WIDTH_TO_ITEMS: "SET_CHANGE_WIDTH_TO_ITEMS",
};

export const indexContext = createContext();

export const IndexState = ({ children }) => {
  const initialState = {
    valuePrueba: "wa ha ha",

    pages: [
      { id: uuidv4(), title: "Skills", type: "skills" },
      { id: uuidv4(), title: "Hobbies", type: "hobbies" },
      {
        id: uuidv4(),
        title: "Formación Académica",
        type: "FormacionAcademica",
      },
      { id: uuidv4(), title: "Proyectos", type: "proyectos" },
      { id: uuidv4(), title: "Contacto", type: "Contacto" },
    ],

    skills: [],
    hobbies: [],
    FormacionAcademica: [],
    proyectos: [],

    imgProfile: [
      {
        id: uuidv4(),
        img: "https://jvespid.github.io/apis//portafolio/img/aboutMe/JV.png",
      },
      {
        id: uuidv4(),
        img: "https://i.pinimg.com/474x/8e/06/f1/8e06f1a04fdaf2c32527fb1699f247f7.jpg",
      },
      {
        id: uuidv4(),
        img: "https://jvespid.github.io/apis//portafolio/img/aboutMe/ICONO.png",
      },
    ],
    prueba: "",
    clientWidthItems: 0,
  };

  const [state, disPatch] = useReducer(LocalReducer, initialState);

  const getChangeData = async type => {
    const range = typeRange(type);
    const res = await axios.get(`/api/${type}/data/?range=${range}`);
    disPatch({
      type: methods.SET_CHANGE_DATA_GENERAL,
      dataToChange: type,
      payload: JSON.parse(res.data),
    });
  };

  const setClientWidthItems = toChange => {
    disPatch({
      type: methods.SET_CHANGE_WIDTH_TO_ITEMS,
      payload: toChange,
    });
  };

  return (
    <indexContext.Provider
      value={{
        state,

        pages: state.pages,
        skills: state.skills,
        hobbies: state.hobbies,
        FormacionAcademica: state.FormacionAcademica,
        proyectos: state.proyectos,
        imgProfile: state.imgProfile,
        prueba: state.prueba,
        valuePrueba: state.valuePrueba,
        clientWidthItems: state.clientWidthItems,
        getChangeData,
        setClientWidthItems,
      }}
    >
      <>{children}</>
    </indexContext.Provider>
  );
};

const LocalReducer = (state, action) => {
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
    case methods.SET_CHANGE_WIDTH_TO_ITEMS: {
      return {
        ...state,
        clientWidthItems: payload,
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
