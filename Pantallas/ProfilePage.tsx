import React from 'react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
    return (
        <div className="container">
            <header>
                GEE Sistema de Gestor de Eventos
            </header>
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
                <button className="button">Guardar Cambios</button>
            </div>
            <button className="back-button">Regresar</button>
        </div>
    );
}

export default ProfilePage;