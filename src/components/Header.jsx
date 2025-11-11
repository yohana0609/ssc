import React from "react";
import menuIcon from "../assets/bmenu.png";
import inicioIcon from "../assets/inicio.png";
import userIcon from "../assets/user.png";

function Header({ modoOscuro, setModoOscuro }) {
  return (
    <header className="header">
      <div className="bmenu">
        <img src={menuIcon} alt="Menú" className="menu-icon" />
      </div>

      <nav className="header_menu_link">
        <a href="#">
          <img src={inicioIcon} alt="Inicio" className="inicio-icon" />
        </a>
        <a href="#">Acerca de</a>
        <a href="#">Ayuda</a>
        <a href="#">Probar Generador</a>
      </nav>

      <div className="cuenta-container">
        <button className="btn-cuenta">
          <span>Iniciar sesión</span>
          <span className="icono">
            <img src={userIcon} alt="Usuario" className="user-icon" />
          </span>
        </button>

        <button
          className="modo-toggle"
          onClick={() => setModoOscuro(!modoOscuro)}
        >
          {modoOscuro ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </div>
    </header>
  );
}

export default Header;
