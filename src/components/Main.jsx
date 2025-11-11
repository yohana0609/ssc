// import React from "react";
import { Paperclip } from "lucide-react"; // ✅ icono vectorial

function Main() {
  return (
    <main className="main">
      <h1 className="presentacion_contenido_principal">Genera ideas en segundos</h1>
      <p className="presentacion_contenido_secundario">¿En qué te puedo ayudar?</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Pregunta lo que vas a generar"
          className="input-generador"
        />
        <button className="btn-adjuntar">
          Adjuntar
          <Paperclip className="adjuntar-icon" size={18} />
        </button>
      </div>
    </main>
  );
}

export default Main;
