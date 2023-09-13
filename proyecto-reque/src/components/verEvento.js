import React, {useState} from "react";
import "../stylesheets/general.css";
import "../stylesheets/verEvento.css";

import { Link } from "react-router-dom";


const VerEvento = ({ tipoUsuario }) => {

    let componenteRenderizado;

    if (tipoUsuario == 'Colaborador') {
        componenteRenderizado =  <div class="VE-rectangle-11" >
            <div class="VE-evento-x" id="evento">
                Evento X 
            </div>
            <div class="VE-nombre-del-evento" id="nombre" >
                Nombre del Evento 
            </div>
            <div class="VE-descripcion" id="descripcion">
                Descripcion 
            </div>
            <div class="VE-lugar" id="lugar">
                Lugar 
            </div>
            <div class="VE-fecha-y-hora" id="fecha-y-hora">
                Fecha y Hora
            </div>
            <div class="VE-capacidad" id="capacidad">
                Capacidad 
            </div>
          </div>
    } else if(tipoUsuario === 'Estudiante') {
        componenteRenderizado =  <div class="VE-rectangle-11" >
            <div class="VE-evento-x" id="evento">
                Evento X 
            </div>
            <div class="VE-nombre-del-evento" id="nombre" >
                Nombre del Evento 
            </div>
            <div class="VE-descripcion" id="descripcion">
                Descripcion 
            </div>
            <div class="VE-lugar" id="lugar">
                Lugar 
            </div>
            <div class="VE-fecha-y-hora" id="fecha-y-hora">
                Fecha y Hora
            </div>
            <div class="VE-capacidad" id="capacidad">
                Capacidad
            </div>
            <div class="VE-espacios" id="espacios">
                Espacios Disponibles 
            </div>
            <Link to="/">
                    <button class="VE-inscribirse" id="inscribirse">
                        Inscribirse
                    </button>
            </Link>
          </div>
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
            <div className="BackgroundVerEvento">
                {componenteRenderizado}
                <div class="VE-group-9" >
                    <Link to="/">
                        <button class="regresar" id="regresar1">Regresar</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default VerEvento