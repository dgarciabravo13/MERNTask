import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ListadoProyectos = () => {

  //Extraer proyectos del state inicial con Context
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = ProyectosContext;

  useEffect(()=>{
    obtenerProyectos();
  },[]);

  //revisar si proyectos tiene contenido
  if(proyectos.length === 0 ) return (<p>no hay proyectos, comienza creando uno</p>);

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
      {proyectos.map((proyecto) => (
        <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto"><Proyecto  proyecto={proyecto} /></CSSTransition>
      ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
