import React from "react";
import adjuntarIcon from "../assets/adjuntar.png";

function Generador() {
  return (
    <section className="generador">
      <h1 className="presentacion_contenido_principal">
        Genera ideas en segundos
      </h1>
      <p className="presentacion_contenido_secundario">
        ¿En qué te puedo ayudar?
      </p>

      <div className="input-container">
        <input type="text" placeholder="Pregunta lo que vas a generar" />
        <button className="btn-adjuntar">
          Adjuntar
          <img
            src={adjuntarIcon}
            alt="Adjuntar"
            className="adjuntar-icon"
          />
        </button>
      </div>
    </section>
  );
}

export default Generador;
