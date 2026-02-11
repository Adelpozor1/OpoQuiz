import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/rutas/home.jsx";
import Registro from "./components/rutas/registro.jsx";
import TestOposicion from "./components/rutas/testOposicion.jsx";
import Acceder from "./components/rutas/acceder.jsx";


function App() {
  return (
    <Router>
      <div className="container mt-4">
        {/* Barra de navegación */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">🚗 Test de Autoescuela</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/registro">Registrarse</Link>
              <Link className="nav-link" to="/acceso">Acceso</Link>
            </div>
          </div>
        </nav>

        {/* Rutas de navegación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/test" element={<TestOposicion />} />
          <Route path="/acceso" element={<Acceder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
