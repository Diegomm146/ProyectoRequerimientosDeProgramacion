import React from 'react';
import '../stylesheets/ProfilePage.css';
import '../stylesheets/general.css';
import { Link } from 'react-router-dom';

const ProfilePage = ({tipoUsuario}) => {
    let componenteRegresar;
    let componenteGuardar;

    if(tipoUsuario == "Estudiante"){
        componenteRegresar = (
            <Link to='/menuEstudiante'>
                <button className="regresar" id='regresarActualizar'>Regresar</button>
            </Link>
        );
        componenteGuardar = (
            <Link to='/menuEstudiante'>
                <button className="button">Guardar Cambios</button>
            </Link>
        );
    } else{
        componenteRegresar = (
            <Link to='/menuColaborador'>
                <button className="regresar" id='regresarActualizar'>Regresar</button>
            </Link>
        );
        componenteGuardar = (
            <Link to='/menuColaborador'>
                <button className="button">Guardar Cambios</button>
            </Link>
        );
    }

    return (
        <div>
            <div className="Header">
                <h1>
                    <span className="text1"> GEE  </span> <br/> 
                    <span className="text2">Sistema Para Gestion De Eventos</span>
                </h1>
                <img className="img_tec" src={require("../imagenes/image-2.png")} />
            </div>
            <div className='BackgroundMenu  '>
                <div className="profile-container">
                    <h2>Actualizar Perfil</h2>
                    <div>
                        <input type="text" placeholder="Nombre"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Correo Electrónico" />
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña" />
                    </div>
                    <div>
                        <input type="password" placeholder="Confirmar Contraseña" />
                    </div>
                    {componenteGuardar}
                </div>
                {componenteRegresar}
            </div>
            
        </div>
    );
}

export default ProfilePage;
