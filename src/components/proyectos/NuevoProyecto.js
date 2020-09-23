import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {
  //obtener el state del formulario

  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

  //state para el proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //extraemos el nombre de proyecto
  const { nombre } = proyecto;

  //funcion para leer en el input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //envio del proyecto desde el formulario
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar

    //Agregar al state

    //Reiniciar el form
  };

  //Funcion para mostar el formulario
  const onClickFormulario = () =>{
    mostrarFormulario();
  }

  return (
    <>
      <button type="button" className="btn btn-block btn-primario" onClick={onClickFormulario}>
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
