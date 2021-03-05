import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser , cleanMessage} from "../../../Redux/user";
import { useDispatch, useSelector } from "react-redux"; 
import { useAlert } from "react-alert";
import { useHistory } from 'react-router';
import './User.css'


//falta la auth que compare las pass para loguear.

const Login = ({history}) => {
  const historia = useHistory()
  const usuario = useSelector(store => store.user.user)
  const error = useSelector(store => store.user.error)
  const dispatch = useDispatch();
  const [err, setError] = useState(false)


  const alert = useAlert();

  // State para iniciar sesión
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // extraer de usuario
  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(false)
    dispatch(cleanMessage())
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email || !password)
    return setError(true)
  };

  const handleLogin = () => {
      dispatch(loginUser(user))
  }


  useEffect(() => {

    if(usuario.token){
      history.push('/')
    }

    if (usuario.id) {
      history.push('/')
      historia.go(0)

    }
  }, [usuario])



  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">

        <h1 style= {{textAlign: "center"}}>Login</h1>
    
           <br/><br/>
           <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primario btn-block"
            onClick={(e)=>handleLogin(e)}
          />
        </form>
        {            error && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>{error}</span></div>
              }
        {err && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>All fields necesary</span></div>}
          <Link to={"/NuevaCuenta"} className="enlace-cuenta">Register</Link>
      </div>
     
    </div>
  );
};

export default Login;