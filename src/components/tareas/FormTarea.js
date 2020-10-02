import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const FormTarea = () => {

    //extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //si no hay proyecto seleccionado no muestres nada
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = e => {
    e.preventDefault()

    //validar

    //pasar la validación

    //agregar la nueva tarea al state de tareas

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