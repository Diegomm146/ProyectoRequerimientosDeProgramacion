import React from "react";
import "../stylesheets/fondo.css";
import "../stylesheets/registro.css"


const Registro = () => {
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

        </div>
    </div>
  );
};

export default Registro