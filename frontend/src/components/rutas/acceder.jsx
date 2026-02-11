import { useState } from "react";
import "../components_css/formulario.css"; // 👈 importante

function Acceder() {
  const [formData, setFormData] = useState({email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Acceder</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-3 text-start">
            <label className="form-label">Correo</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="tu@correo.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Acceder;
