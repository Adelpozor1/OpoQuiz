import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center home-bg">
      <h2 className="mb-3">Bienvenido al Test de Autoescuela 🚗</h2>
      <p className="lead">
        Practica tus conocimientos con nuestros tests y mejora tu puntuación.
      </p>

      <div className="mt-4">
        <Link to="/registro" className="btn btn-primary me-2">
          Ir a Registro
        </Link>
        <Link to="/test" className="btn btn-success">
          Hacer un Test
        </Link>
      </div>
    </div>
  );
}

export default Home;
