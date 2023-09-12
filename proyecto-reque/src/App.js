import './App.css';
import Inicio from './components/inicio';
import Login from './components/login';
import Registro from './components/registrarse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/loginAsociacion" element={<Login />} />
        <Route path="/loginEstudiante" element={<Login />} />
        <Route path="/loginColaborador" element={<Login />} />
        <Route path="/registroAsicacion" element={<Registro />} />
        <Route path="/registroEstudiante" element={<Registro />} />
        <Route path="/registroColaborador" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
