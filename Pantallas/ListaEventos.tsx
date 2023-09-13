import React from 'react';
import './ListaEventos.css';

const ListaEventos: React.FC = () => {
    return (
        <div className="container">
            <header>
                GEE Sistema de Gestor de Eventos
            </header>
            <div className="profile-container">
                <h2>Lista de Eventos</h2>
                <div className="event-wrapper">
                    <div className="event-container">
                        <h3>Evento X</h3>
                    </div>
                    <button>Ver</button>
                </div>
                <div className="event-wrapper">
                    <div className="event-container">
                        <h3>Evento Y</h3>
                    </div>
                    <button>Ver</button>
                </div>
                <div className="event-wrapper">
                    <div className="event-container">
                        <h3>Evento Z</h3>
                    </div>
                    <button>Ver</button>
                </div>
            </div>
            <button className="back-button">Regresar</button>
        </div>
    );
}

export default ListaEventos;