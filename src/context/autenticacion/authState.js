import React, {useReducer} from 'react';
import AuthContext from "./authContext";
import AuthReducer from "./authReduder";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

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
      });
      //Obtener el usuario
      usuarioAutenticado();
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

  //Retorna el usuario autenticado
  const usuarioAutenticado = async () =>{
    const token = localStorage.getItem("token");
    if(token){
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      dispach({
        type:OBTENER_USUARIO,
        payload:respuesta.data.usuario
      })
    } catch (error) {
      dispach({
        type:LOGIN_ERROR
      })
    }
  }

  //Cuando el usuario inicia sesion
  const iniciarSesion = async datos => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      
      dispach({
        type:LOGIN_EXITOSO,
        payload:respuesta.data
      });
      //Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria:"alerta-error"
      }

      dispach({
        type:LOGIN_ERROR,
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
        registrarUsuario,
        iniciarSesion
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;