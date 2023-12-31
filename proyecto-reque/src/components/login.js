import React, {useState} from "react";
import "../stylesheets/general.css";
import "../stylesheets/login.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";


const Registro = ({ tipoUsuario }) => {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigate = useNavigate();

    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    };

    const handleContrasenaChange = (e) => {
        setContrasena(e.target.value);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,correo,contrasena)
        .then((userCredentials) => {
            console.log(userCredentials)
            navigate(`/menu${tipoUsuario}`);
        }).catch((error)=>{
            console.log(error)
        })
      };

    return (
        <div>
            <div className="Header">
                <h1>
                    <span className="text1"> GEE  </span> <br/> 
                    <span className="text2">Sistema Para Gestion De Eventos</span>
                </h1>
                <img className="img_tec" src={require("../imagenes/image-2.png")} />
            </div>
            <div className="Background">
                <div className="VentanaLogin">
                    <img className="img_ventanaLogin" src={require("../imagenes/image-2.png")} />
                    <h1> 
                        <span className="text_login"> Iniciar Sesion Como {tipoUsuario} </span> 
                    </h1>

                    <form className="formLogin" onSubmit={handleSubmit}>
                        <input
                        className="inputLogin"
                        type="email"
                        value={correo}
                        onChange={handleCorreoChange}
                        placeholder="Correo Electrónico"
                        />
                        <input
                        className="inputLogin"
                        type="password"
                        value={contrasena}
                        onChange={handleContrasenaChange}
                        placeholder="Contraseña"
                        />
                        <button className="accederBoton" type="submit">Acceder</button> 
                        
                    </form>

                    <Link to="/">
                        <button className="regresar" id="regresar1">Regresar</button>
                    </Link>

                    <Link to={`/registro${tipoUsuario}`} className="linkRegistrarse">Registrarse</Link>
                </div>
            </div>
        </div>
    );
};

export default Registro