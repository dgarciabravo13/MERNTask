import React from 'react';

const onChange = () =>{

}

const Login = () => {
  return ( 
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-block btn-primario"
              value="Iniciar Sesion"
            />
          </div>
        </form>
      </div>
    </div>
    );
}
 
export default Login;