import React, {useState} from "react";
import "../stylesheets/general.css";
import "../stylesheets/crearEvento.css";
import { Link, useNavigate } from "react-router-dom";


const CrearEvento = ({ operacion }) => {
    const [nombre, setNombre] = useState('');
    const [desc, setDesc] = useState('');
    const [lugar, setLugar] = useState('');
    const [fechaHora, setfechaHora] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const navigate = useNavigate();

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleLugarChange = (e) => {
        setLugar(e.target.value);
    };

    const handleFechaHoraChange = (e) => {
        setfechaHora(e.target.value);
    };

    const handleCapacidadChange = (e) => {
        setCapacidad(e.target.value);
    };

    // Función para manejar el envío del formulario
    const crear = (e) => {
        e.preventDefault();
        // Aquí puedes hacer algo con los valores de nombre, correo, contrasena y numero
        console.log('Nombre del evento:', nombre);
        console.log('Descripcion:', desc);
        console.log('Lugar:', lugar);
        console.log('Fecha y Hora:', fechaHora);
        console.log('Capacidad:', capacidad);

        navigate('/menuAsociacion');

    };

    const modificar = (e) => {
        e.preventDefault();
        // Aquí puedes hacer algo con los valores de nombre, correo, contrasena y numero
        console.log('Nombre del evento:', nombre);
        console.log('Descripcion:', desc);
        console.log('Lugar:', lugar);
        console.log('Fecha y Hora:', fechaHora);
        console.log('Capacidad:', capacidad);
        
        navigate('/menuAsociacion');

    };

    var titulo;
    let componenteRenderizado;

    if (operacion == 'Crear') {
        componenteRenderizado = <Link to="/menuAsociacion">
            <button class="CE-inscribirse" id="inscribirse" onClick={crear}>
                Crear Evento
            </button>
        </Link>;
        titulo = "Crear Evento";
    } else if(operacion === 'Modificar') {
        componenteRenderizado = <Link to="/menuAsociacion">
            <button class="CE-inscribirse" id="inscribirse" onClick={modificar}>
                Modificar Evento
            </button>
        </Link>;
        titulo = "Modificar Evento";
    }
    // En el js se va a tener que insertar los colaboradores en el ul hay uno pero es de ejemplo
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
                <div class="CE-rectangle-11" >
                <div class="CE-evento-x" id="evento">
                    {titulo}
                </div>
                <input
                    className="CE-nombre-del-evento"
                    type="text"
                    value={nombre}
                    onChange={handleNombreChange}
                    placeholder="Titulo del evento"
                />
                <input
                    className="CE-descripcion"
                    type="text"
                    value={desc}
                    onChange={handleDescChange}
                    placeholder="Descripcion"
                />
                <input
                    className="CE-lugar"
                    type="text"
                    value={lugar}
                    onChange={handleLugarChange}
                    placeholder="Lugar"
                />
                <input
                    className="CE-fecha-y-hora"
                    type="datetime-local"
                    value={fechaHora}
                    onChange={handleFechaHoraChange}
                    placeholder="Fecha y Hora"
                />
                <input
                    className="CE-capacidad"
                    type="number"
                    value={capacidad}
                    onChange={handleCapacidadChange}
                    placeholder="Capacidad"
                />
                {componenteRenderizado}
                <div class="CE-rectangle-4" >
                    <label for="itemList" class="CE-fontAC">Administrar Colaborador</label>
                    <ul id="itemsList">
                        <li>
                            <input type="checkbox" id="1" value="1"/>
                            <label for="1" class="CE-fontCB">Sample Item</label>
                        </li>
                    </ul>
                </div>
            </div>
                <div class="CE-group-9" >
                    <Link to="/menuAsociacion">
                        <button class="regresar" id="regresar1">Regresar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CrearEvento