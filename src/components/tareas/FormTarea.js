import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import tareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {

    //extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {agregarTarea} = tareasContext;

  //State del formulario
  const [tarea, guardarTarea] = useState({
    nombre : ""
  })

  const {nombre} = tarea;

  //si no hay proyecto seleccionado no muestres nada
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario

  const handleChange = e => {
    guardarTarea({...tarea,[e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    //validar

    //pasar la validación

    //agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //reiniar el form
  }

  return ( 
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
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
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
   );
}
 
export default FormTarea;