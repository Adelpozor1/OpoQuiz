import { useState } from "react";



function TestOposiciones() {
  const preguntas = [
    {
      id: 1,
      texto: "¿Cuál es la velocidad máxima en ciudad?",
      opciones: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
      correcta: "30 km/h"
    },
    {
      id: 2,
      texto: "Si el semáforo está en ámbar intermitente, significa:",
      opciones: [
        "Detenerse obligatoriamente",
        "Precaución, pero se puede pasar",
        "Prohibido el paso",
        "Prioridad para peatones"
      ],
      correcta: "Precaución, pero se puede pasar"
    },
    {
      id: 3,
      texto: "¿Qué debes hacer antes de adelantar?",
      opciones: [
        "Avisar con las luces largas",
        "Comprobar que puedes hacerlo con seguridad",
        "Pisar el acelerador a fondo",
        "Ninguna de las anteriores"
      ],
      correcta: "Comprobar que puedes hacerlo con seguridad"
    }
  ];

  const [respuestas, setRespuestas] = useState({});
  const [puntuacion, setPuntuacion] = useState(null);

  const handleChange = (id, opcion) => {
    setRespuestas({ ...respuestas, [id]: opcion });
  };

  const calcularResultado = () => {
    let aciertos = 0;
    preguntas.forEach(p => {
      if (respuestas[p.id] === p.correcta) aciertos++;
    });
    setPuntuacion(aciertos);
  };

  return (
    <div>
      <h2>Test de Autoescuela</h2>
      {preguntas.map(p => (
        <div key={p.id} style={{ marginBottom: "20px" }}>
          <h4>{p.texto}</h4>
          {p.opciones.map(opcion => (
            <label key={opcion} style={{ display: "block" }}>
              <input
                type="radio"
                name={`pregunta-${p.id}`}
                value={opcion}
                onChange={() => handleChange(p.id, opcion)}
              />
              {opcion}
            </label>
          ))}
        </div>
      ))}
      <button onClick={calcularResultado}>Finalizar Test</button>

      {puntuacion !== null && (
        <h3>
          Has acertado {puntuacion} de {preguntas.length} preguntas.
        </h3>
      )}
    </div>
  );
}

export default TestOposiciones;
