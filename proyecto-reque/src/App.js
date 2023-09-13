import './App.css';
import Inicio from './components/inicio';
import Login from './components/login';
import Registro from './components/registrarse';
import MenuPrincipal from './components/menuPrincipal';
import VerEvento from './components/verEvento';
import CrearEvento from './components/crearEvento';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import ListaEventos from './components/ListaEventos';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pantalla Inicio */}
        <Route path="/" element={<Inicio />} />
        {/* Pantalla para los logins */}
        <Route path="/loginAsociacion" element={<Login tipoUsuario="Asociacion"/>} />
        <Route path="/loginEstudiante" element={<Login tipoUsuario="Estudiante"/>} />
        <Route path="/loginColaborador" element={<Login tipoUsuario="Colaborador"/>} />
        {/* Pantalla para los sign up */}
        <Route path="/registroAsociacion" element={<Registro tipoUsuario="Asociacion" tipoNumero="Telefonico" />} />
        <Route path="/registroEstudiante" element={<Registro tipoUsuario="Estudiante" tipoNumero="Carnet"/>} />
        <Route path="/registroColaborador" element={<Registro tipoUsuario="Colaborador" tipoNumero="Carnet"/>} />
        {/* Pantalla para los menus principales de cada usuario*/}
        <Route path="/menuAsociacion" element={<MenuPrincipal tipoUsuario={"Asociacion"}/>} />
        <Route path="/menuEstudiante" element={<MenuPrincipal tipoUsuario={"Estudiante"}/>} />
        <Route path="/menuColaborador" element={<MenuPrincipal tipoUsuario={"Colaborador"}/>} />
        {/* Pantallas para Asociacion*/}
        {/* Pantalla para administrar eventos*/}
        {/* FALTA*/}
        {/* Pantalla para modificar evento*/}
        <Route path="/modificarEvento" element={<CrearEvento operacion={"Modificar"}/>} />
        {/* Pantalla para crear evento*/}
        <Route path="/crearEvento" element={<CrearEvento operacion={"Crear"}/>} />
        {/* Pantalla para ver eventos creados*/}
        {/* FALTA*/}
        {/* Pantallas para Estudiante*/}
        {/* Pantalla para Administrar Perfil*/}
        <Route path="/administrarPerfilEstudiante" element={<ProfilePage tipoUsuario={"Estudiante"} />} />
        {/* Pantalla para ver lista de eventos*/}
        <Route path="/verListaEventosEstudiante" element={<ListaEventos />} />
        {/* Pantalla para ver info de un evento*/}
        <Route path="/verEvento" element={<VerEvento tipoUsuario={"Estudiante"}/>} />

        {/* Pantallas para Colaborador*/}
        {/* Pantalla para Administrar Perfil*/}
        <Route path="/administrarPerfilColaborador" element={<ProfilePage tipoUsuario={"Colaborador"} />} />
        {/* Pantalla para Ver la lista de eventos que colabora*/}
        {/* FALTA*/}
        {/* Pantalla para Ver info de un evento*/}
        <Route path="/verEventoColaborador" element={<VerEvento tipoUsuario={"Colaborador"}/>} />
        
        
        

      </Routes>
    </Router>
  );
}

export default App;
