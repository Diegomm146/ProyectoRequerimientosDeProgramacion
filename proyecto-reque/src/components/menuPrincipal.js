import React from "react";
import "../stylesheets/menuPrincipal.css";
import "../stylesheets/general.css";
import { Link } from "react-router-dom";

const MenuPrincipal = ({tipoUsuario}) => {

    let componenteRenderizado;

    if (tipoUsuario == 'Asociacion') {
        componenteRenderizado = <div className="DivBotonesAsociacion">
                                    <Link to="/administrarEventos">
                                        <button className="BotonesAsociacion" id="BotonesAsociacion1">Administrar Eventos</button>
                                    </Link> 
                                    
                                    <Link to="/crearEvento">
                                        <button className="BotonesAsociacion" id="BotonesAsociacion2">Crear Evento</button>
                                    </Link> 
                                    <Link to="/verEventosCreados">
                                        <button className="BotonesAsociacion" id="BotonesAsociacion3">Ver Eventos Creados</button>
                                    </Link>
                                </div>;
      } else if (tipoUsuario === 'Estudiante') {
        componenteRenderizado = <div className="DivBotonesEstudiante">
                                    <Link to="/administrarPerfilEstudiante">
                                        <button className="BotonesEstudiante" id="BotonesEstudiante1">Administrar Perfil</button>
                                    </Link> 
                                    
                                    <Link to="/verListaEventosEstudiante">
                                        <button className="BotonesEstudiante" id="BotonesEstudiante2">Ver Eventos</button>
                                    </Link> 
                                </div>;
      } else {
        // En caso de otro tipo de usuario o valor no reconocido, puedes manejarlo aquí.
        componenteRenderizado = <div className="DivBotonesColaborador">
                                    <Link to="/administrarPerfilColaborador">
                                        <button className="BotonesColaborador" id="BotonesColaborador1">Administrar Perfil</button>
                                    </Link> 
                                    
                                    <Link to="/verListaEventosColaborador">
                                        <button className="BotonesColaborador" id="BotonesColaborador2">Ver Eventos Que Colabora</button>
                                    </Link> 
                                </div>;
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
            <div className="BackgroundMenu">
                <h1 className="Bienvenido"> Bienvenido</h1>
                {componenteRenderizado}
                <Link to="/">
                        <button className="regresar" id="regresarMenu">Regresar</button>
                </Link>
            </div>
        </div>
        
    );
};

export default MenuPrincipal
