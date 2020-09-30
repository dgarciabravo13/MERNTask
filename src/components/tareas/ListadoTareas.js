import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {

  //extraer proyecto del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //si no hay proyecto seleccionado muestra el siguiente texto:
  if (!proyecto) return (<h2>Selecciona un Proyecto</h2>);

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tareas">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
