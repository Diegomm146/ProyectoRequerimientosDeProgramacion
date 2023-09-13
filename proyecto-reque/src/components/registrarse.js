import React, {useState} from "react";
import "../stylesheets/general.css";
import "../stylesheets/registro.css";
import { Link } from "react-router-dom";


const Registro = ({ tipoUsuario, tipoNumero }) => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [numero, setNumero] = useState('');

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
        // Aquí puedes hacer algo con los valores de nombre, correo, contrasena y numero
        console.log('Nombre:', nombre);
        console.log('Correo Electrónico:', correo);
        console.log('Contraseña:', contrasena);
        console.log('Número:', numero);
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
                        type="text"
                        value={correo}
                        onChange={handleCorreoChange}
                        placeholder="Correo Electrónico"
                        />
                        <input
                        className="inputRegistro"
                        type="text"
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
                        <Link to={`/menu${tipoUsuario}`}>
                           <button className="accederBoton" type="submit">Acceder</button> 
                        </Link>
                        
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