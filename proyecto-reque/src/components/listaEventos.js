import React from "react";
import "../stylesheets/listaEventos.css";
import "../stylesheets/general.css";
import { Link } from "react-router-dom";


const ListaEventos = ({ operacion }) => {
    
    let path;
    if (operacion == 'Ver') {
        path =  "/verEvento";
    } else if (operacion === 'Administrar'){
        path =  "/modificarEvento";
    } else{
        path =  "/verEventoColaborador";
    }

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
            <ul className="profile-container">
                <h2>Lista de Eventos</h2>
                <li className="event-wrapper">
                    <div className="event-container" >
                        <h3>Evento X</h3>
                    </div>
                    <Link to={path}>
                        <button>Ver</button>
                    </Link>                </li>
                <li className="event-wrapper">
                    <div className="event-container">
                        <h3>Evento Y</h3>
                    </div>
                    <Link to={path}>
                        <button>Ver</button>
                    </Link>                </li>
                <li className="event-wrapper">
                    <div className="event-container">
                        <h3>Evento Z</h3>
                    </div>
                    <Link to={path}>
                        <button>Ver</button>
                    </Link>
                </li>
            </ul>
            <div class="LE-group-9" >
                <Link to="/">
                    <button class="regresar" id="regresar1">Regresar</button>
                </Link>
            </div>
        </div>
    </div>
);
}

export default ListaEventos;