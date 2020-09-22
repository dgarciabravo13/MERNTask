import React, {useState} from 'react';

const NuevoProyecto = () => {

  //state para el proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre:""
  })

  //extraemos el nombre de proyecto
  const {nombre} = proyecto;

  //funcion para leer en el input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,[e.target.name]:e.target.value
    })
  }

  //envio del proyecto desde el formulario
  const onSubmitProyecto = e => {
    e.preventDefault();

    //Validar

    //Agregar al state

    //Reiniciar el form


  }


  return (
    <>
    <button
      type="button"
      className="btn btn-block btn-primario"
    >Nuevo Proyecto
    </button>
    <form
      className="formulario-nuevo-proyecto"
      onSubmit={onSubmitProyecto}
    >
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
    </>
    );
}
 
export default NuevoProyecto;