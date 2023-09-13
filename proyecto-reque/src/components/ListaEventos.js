import React from 'react';
import '../stylesheets/ListaEventos.css';
import { Link } from 'react-router-dom';

const ListaEventos = () => {
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
                        <Link to="/verEvento">
                            <button>Ver</button> 
                        </Link>
                        
                    </div>
                    <div className="event-wrapper">
                        <div className="event-container">
                            <h3>Evento Y</h3>
                        </div>
                        <Link to="/verEvento">
                            <button>Ver</button> 
                        </Link>
                    </div>
                    <div className="event-wrapper">
                        <div className="event-container">
                            <h3>Evento Z</h3>
                        </div>
                        <Link to="/verEvento">
                            <button>Ver</button> 
                        </Link>
                    </div>
                </div>
                <Link to='/menuEstudiante'>
                    <button className="regresar" id='regresarListaEventos'>Regresar</button>
                </Link>
                
            </div>
            
        </div>
    );
}

export default ListaEventos;
