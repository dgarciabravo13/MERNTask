import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import tareaContext from "../../context/tareas/TareaContext";

const Proyecto = ({ proyecto }) => {

  //obtener en state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const {obtenerTareas} = tareasContext;

  const seleccionarProyecto = id => {
    proyectoActual(id); //Fijar un proyecto actual
    obtenerTareas(id); //Filtrar las tareas cuando se haga click
  }
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={()=> seleccionarProyecto(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
