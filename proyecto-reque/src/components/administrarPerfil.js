import React, {useState} from "react";
import "../stylesheets/administrarPerfil.css";
import "../stylesheets/general.css";
import { Link } from "react-router-dom";

const AdministrarPerfil = ({ tipoUsuario }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    const [confContra, setConfContra] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    };

    const handleContraChange = (e) => {
        setContra(e.target.value);
    };

    const handleConfContraChange = (e) => {
        setConfContra(e.target.value);
    };

    // Función para manejar el envío del formulario
    const modificar = (e) => {
        e.preventDefault();
        // Aquí puedes hacer algo con los valores de nombre, correo, contrasena y numero
        console.log('Nombre del evento:', nombre);
        console.log('Correo:', correo);
        console.log('Contrasena:', contra);
        console.log('Confirmacion contrasena:', confContra);

    };
    return (
        <div className="container">
            <div className="Header">
                <h1>
                    <span className="text1"> GEE  </span> <br/> 
                    <span className="text2">Sistema Para Gestion De Eventos</span>
                </h1>
                <img className="img_tec" src={require("../imagenes/image-2.png")} />
            </div>
            <div className="BackgroundVerEvento">
                <div className="profile-container ">
                    <h2>Actualizar Perfil</h2>
                    <div>
                        <input type="text"
                         value={nombre}
                         onChange={handleNombreChange}
                         placeholder="Nombre"/>
                    </div>
                    <div>
                        <input type="email" 
                         value={correo}
                         onChange={handleCorreoChange}
                        placeholder="Correo Electrónico" />
                    </div>
                    <div>
                        <input type="password" 
                         value={contra}
                         onChange={handleContraChange}
                        placeholder="Contraseña" />
                    </div>
                    <div>
                        <input type="password" 
                          value={confContra}
                          onChange={handleConfContraChange}
                        placeholder="Confirmar Contraseña" />
                    </div>
                    <button className="button" onClick={modificar}>Guardar Cambios</button>
                </div>
                <div class="group-9" >
                    <Link to="/">
                        <button class="regresar" id="regresar1">Regresar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AdministrarPerfil;