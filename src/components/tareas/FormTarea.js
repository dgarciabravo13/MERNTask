import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import tareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  //extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareasContext;

  //Effect que detecta si alguna tarea está seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  //State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  //si no hay proyecto seleccionado no muestres nada
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario

  const handleChange = (e) => {
    guardarTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //Revisar si es edicion o es nueva tarea
    if (tareaseleccionada === null) {
      //agregar la nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      //actualizar tarea existente
      actualizarTarea(tarea);
      //elimina la tarea seleccionanda del state
      limpiarTarea();
    }

    //Obtener las tareas y filtrarlas

    obtenerTareas(proyectoActual.id);

    //reiniar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-block btn-primario btn-submit"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
