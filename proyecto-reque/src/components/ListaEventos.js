import React from 'react';
import '../stylesheets/ListaEventos.css';
import { Link } from 'react-router-dom';

const ListaEventos = ({tipoUsuario,accion}) => {

    let componenteBoton;
    let componenteRegresar;

    if (tipoUsuario == 'Estudiante') {
        componenteBoton = <Link to="/verEvento">
                            <button>Ver</button> 
                        </Link>;
        componenteRegresar = <Link to='/menuEstudiante'>
                                <button className="regresar" id='regresarListaEventos'>Regresar</button>
                            </Link>
    }  else if (tipoUsuario == 'Asociacion' && accion == 'verEventosCreados') {
        componenteBoton = <div></div>;
        componenteRegresar = <Link to='/menuAsociacion'>
                                <button className="regresar" id='regresarListaEventos'>Regresar</button>
                            </Link>
    } else if (tipoUsuario == 'Colaborador') {
        componenteBoton = <Link to="/verEventoColaborador">
                            <button>Ver</button> 
                        </Link>;
        componenteRegresar = <Link to='/menuColaborador'>
                                <button className="regresar" id='regresarListaEventos'>Regresar</button>
                            </Link>  
    } else if (tipoUsuario == 'Asociacion') {
        componenteBoton = <Link to="/modificarEvento">
                            <button>Modificar</button> 
                        </Link>;
        componenteRegresar = <Link to='/menuAsociacion'>
                                <button className="regresar" id='regresarListaEventos'>Regresar</button>
                            </Link>
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

            <div className='BackgroundMenu'>
                <div className="profile-container">
                    <h2>Lista de Eventos</h2>
                    <div className="event-wrapper">
                        <div className="event-container">
                            <h3>Evento X</h3>
                        </div>
                        {componenteBoton}
                        
                    </div>
                    <div className="event-wrapper">
                        <div className="event-container">
                            <h3>Evento Y</h3>
                        </div>
                        {componenteBoton}
                    </div>
                    <div className="event-wrapper">
                        <div className="event-container">
                            <h3>Evento Z</h3>
                        </div>
                        {componenteBoton}
                    </div>
                </div>
                {componenteRegresar}
            </div>
            
        </div>
    );
}

export default ListaEventos;
