import React, { useReducer } from "react";

import proyectoContext from "./ProyectoContext";
import proyectoReducer from "./ProyectoReducer";
import { FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [
      { id: 1, nombre: "Tienda Virtual" },
      { id: 2, nombre: "Intranet" },
      { id: 3, nombre: "Diseño de sitio web" },
    ],
    formulario: false,
  };

  //Dispach para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
