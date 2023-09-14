import React, {useState} from "react";
import "../stylesheets/general.css";
import "../stylesheets/registro.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"


const Registro = ({ tipoUsuario, tipoNumero }) => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [numero, setNumero] = useState('');
    const navigate = useNavigate();

     const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    };

    const handleContrasenaChange = (e) => {
        setContrasena(e.target.value);
    };

    const handleNumeroChange = (e) => {
        setNumero(e.target.value);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth,correo,contrasena)
        .then((userCredentials) => {
            console.log(userCredentials)
            navigate(`/menu${tipoUsuario}`);
        }).catch((error)=>{
            console.log(error)
        })
        // Aquí puedes hacer algo con los valores de nombre, correo, contrasena y numero 
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
                <div className="ventanaRegistro">
                    <img className="img_ventanaRegistro" src={require("../imagenes/image-2.png")} />
                    <h1> 
                        <span className="text_registro"> Registro Como {tipoUsuario} </span> 
                    </h1>

                    <form className="formRegistro" onSubmit={handleSubmit}>
                        <input
                        className="inputRegistro"
                        type="text"
                        value={nombre}
                        onChange={handleNombreChange}
                        placeholder="Nombre"
                        />
                        <input
                        className="inputRegistro"
                        type="email"
                        value={correo}
                        onChange={handleCorreoChange}
                        placeholder="Correo Electrónico"
                        />
                        <input
                        className="inputRegistro"
                        type="password"
                        value={contrasena}
                        onChange={handleContrasenaChange}
                        placeholder="Contraseña"
                        />
                        <input
                        className="inputRegistro"
                        type="text"
                        value={numero}
                        onChange={handleNumeroChange}
                        placeholder={`Numero ${tipoNumero}`}
                        />
                        <button className="accederBoton" type="submit">Acceder</button> 
                        
                    </form>

                    <Link to="/">
                        <button className="regresar" id="regresar1">Regresar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Registro