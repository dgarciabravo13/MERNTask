import React, {useReducer} from 'react';
import AuthContext from "./authContext";
import AuthReducer from "./authReduder";

import clienteAxios from "../../config/axios";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado:null,
    usuario:null,
    mensaje:null
  }

  const [state, dispach] = useReducer(AuthReducer,initialState);

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      console.log(respuesta.data);

      dispach({
        type:REGISTRO_EXITOSO,
        payload:respuesta.data
      })
    } catch (error) {
      // console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria:"alerta-error"
      }

      dispach({
        type:REGISTRO_ERROR,
        payload:alerta
      })
    }
  }


  return (
    <AuthContext.Provider
      value={{
        token:state.token,
        autenticado:state.autenticado,
        usuario:state.usuario,
        mensaje:state.mensaje,
        registrarUsuario
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;