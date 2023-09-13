import './App.css';
import Inicio from './components/inicio';
import Login from './components/login';
import Registro from './components/registrarse';
import MenuPrincipal from './components/menuPrincipal';
import VerEvento from './components/verEvento';
import CrearEvento from './components/crearEvento';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/loginAsociacion" element={<Login tipoUsuario="Asociacion"/>} />
        <Route path="/loginEstudiante" element={<Login tipoUsuario="Estudiante"/>} />
        <Route path="/loginColaborador" element={<Login tipoUsuario="Colaborador"/>} />
        <Route path="/registroAsociacion" element={<Registro tipoUsuario="Asociacion" tipoNumero="Telefonico" />} />
        <Route path="/registroEstudiante" element={<Registro tipoUsuario="Estudiante" tipoNumero="Carnet"/>} />
        <Route path="/registroColaborador" element={<Registro tipoUsuario="Colaborador" tipoNumero="Carnet"/>} />
        <Route path="/menuAsociacion" element={<MenuPrincipal tipoUsuario={"Asociacion"}/>} />
        <Route path="/menuEstudiante" element={<MenuPrincipal tipoUsuario={"Estudiante"}/>} />
        <Route path="/menuColaborador" element={<MenuPrincipal tipoUsuario={"Colaborador"}/>} />
        <Route path="/verEventoColaborador" element={<VerEvento tipoUsuario={"Colaborador"}/>} />
        <Route path="/verEvento" element={<VerEvento tipoUsuario={"Estudiante"}/>} />
        <Route path="/crearEvento" element={<CrearEvento operacion={"Crear"}/>} />
        <Route path="/modificarEvento" element={<CrearEvento operacion={"Modificar"}/>} />

      </Routes>
    </Router>
  );
}

export default App;
