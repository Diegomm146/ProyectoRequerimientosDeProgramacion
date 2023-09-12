import React from "react";
import "../stylesheets/inicio.css";
import "../stylesheets/general.css";
import { Link } from "react-router-dom";

const Inicio = () => {
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
            <Link to="/loginAsociacion">
                <button className="botonAcceso" id="botonAcceso1">Acceder Como Asociacion</button>
            </Link>

            <Link to="/loginEstudiante">
                <button className="botonAcceso" id="botonAcceso2">Acceder Como Estudiante</button>
            </Link>

            <Link to="/loginColaborador">
                <button className="botonAcceso" id="botonAcceso3">Acceder Como Colaborador</button>
            </Link>
        </div>
    </div>
    
  );
};

export default Inicio
