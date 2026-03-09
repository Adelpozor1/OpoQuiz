import { useState } from "react";
import "../components_css/formulario.css";

function Registro() { 

  const [formData, setFormData] = useState({ 
    nombre: "", 
    email: "", 
    password: "", 
  });

  const [mensaje, setMensaje] = useState("");




function  handleChange (e) {

  const nombreDelCampo = e.target.name;
  const valorEscrito = e.target.value;

  const nuevo = {
    nombre: formData.nombre,
    email: formData.email,
    password: formData.password,
  };

  if(nombreDelCampo === "nombre") nuevo.nombre = valorEscrito;
  if(nombreDelCampo === "email") nuevo.email = valorEscrito;
  if(nombreDelCampo === "password") nuevo.password = valorEscrito;

  setFormData(nuevo);

}

async function handleSubmit (e) {
  e.preventDefault();
  console.log("Datos de formulario:", formData)

  try{
    const res = await fetch("http://localhost3000/insertDB", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok){
      setMensaje(data.msg || "Error al registrar")
      return;
    }

    setMensaje(data.msg || "Usuario registrado correctamente")
  }catch (error) {
    console.error("Error de red: ", error);
    setMensaje("No se puede conectar con el servidor")
  }
}






  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        {mensaje && <p style={{ margin: "10x" }}>{mensaje}</p>}

        <pre> {JSON.stringify(formData,null,2)}</pre>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre" 
          value={formData.nombre}
          onChange={handleChange}
        />

        <input 
        type="email" 
        name="email" 
        placeholder="Email"
        value={formData.email} 
        onChange={handleChange} 
        />

        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
        />

        <button 
        type="submit">
          Registrarse
        </button>


      </form>

    </div>

    
  );
}


export default Registro;
