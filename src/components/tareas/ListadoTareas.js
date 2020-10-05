import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import tareaContext from "../../context/tareas/TareaContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {

  //extraer proyecto del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //obtener las tareas del proyecto seleccionado del context
  const tareasContext = useContext(tareaContext);
  const {tareasproyecto} = tareasContext;

  //si no hay proyecto seleccionado muestra el siguiente texto:
  if (!proyecto) return (<h2>Selecciona un Proyecto</h2>);

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Elimina un proyecto

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tareas">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
