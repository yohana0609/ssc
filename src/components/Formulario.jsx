import React from "react";
import googleIcon from "../assets/google-icon.svg";
import mailIcon from "../assets/mail-icon.svg";

function Formulario() {
  return (
    <section className="formulario-container">
      <h2>Inicia sesión o crea una cuenta</h2>
      <div className="botones-sociales">
        <button className="btn-social">
          <img src={googleIcon} alt="Google" />
          Iniciar con Google
        </button>
        <button className="btn-social">
          <img src={mailIcon} alt="Correo" />
          Iniciar con correo
        </button>
      </div>

      <div className="divider">
        <span>o</span>
      </div>

      <form className="formulario">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button className="btn-principal">Registrarme</button>
      </form>
    </section>
  );
}

export default Formulario;
