import adjuntar from '../assets/adjuntar.png';

function Main() {
  return (
    <main>
      <h1 className="presentacion_contenido_principal">Genera ideas en segundos</h1>
      <p className="presentacion_contenido_secundario">¿En qué te puedo ayudar?</p>

      <div className="input-container">
        <input type="text" placeholder="Pregunta lo que vas a generar" />
        <button className="btn-adjuntar">
          Adjuntar
          <img src={adjuntar} alt="Adjuntar" className="adjuntar-icon" />
        </button>
      </div>
    </main>
  );
}

export default Main;
