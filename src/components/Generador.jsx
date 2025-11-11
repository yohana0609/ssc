import React, { useState } from "react";
import { Paperclip, Send, Sparkles } from "lucide-react";

function Generador() {
  const [pregunta, setPregunta] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [resultado, setResultado] = useState("");

  const manejarAdjunto = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
  };

  const generarIdea = () => {
    if (!pregunta.trim() && !archivo) {
      alert("Por favor escribe una pregunta o adjunta un archivo.");
      return;
    }

    const nombreArchivo = archivo ? ` (archivo: ${archivo.name})` : "";
    setResultado(`💡 Idea generada para: "${pregunta}"${nombreArchivo}`);
  };

  return (
    <main className="generador-main animate-fadeIn">
      <h1 className="presentacion_contenido_principal">Genera ideas en segundos</h1>
      <p className="presentacion_contenido_secundario">¿En qué te puedo ayudar?</p>

      <div className="input-wrapper">
        <div className="input-container">
          <input
            type="text"
            placeholder="Escribe tu idea o tema aquí..."
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            className="input-generador"
          />

          {/* Botón de adjuntar dentro del input */}
          <label htmlFor="archivo" className="btn-icono-adjuntar">
            <Paperclip size={20} />
            <input
              id="archivo"
              type="file"
              onChange={manejarAdjunto}
              style={{ display: "none" }}
            />
          </label>
        </div>

        {/* Botón de enviar */}
        <button className="btn-enviar" onClick={generarIdea}>
          <Send size={18} />
          <span>Enviar</span>
        </button>
      </div>

      {resultado && (
        <div className="resultado">
          <Sparkles size={22} className="icono-idea" />
          <p>{resultado}</p>
        </div>
      )}
    </main>
  );
}

export default Generador;
