import React from "react";
import { Menu, Home, User, Sun, Moon } from "lucide-react"; // ✅ iconos vectoriales

function Header({ modoOscuro, setModoOscuro, onOpenSidebar, onOpenRegister }) {
  return (
    <header className="header">
      {/* Botón de menú */}
      <div className="bmenu" onClick={onOpenSidebar} style={{ cursor: "pointer" }}>
        <Menu className="menu-icon" size={26} />
      </div>

      {/* Navegación principal */}
      <nav className="header_menu_link">
        <a href="#" className="nav-link">
          <Home size={20} />
        </a>
        <a href="#" className="nav-link">Acerca de</a>
        <a href="#" className="nav-link">Ayuda</a>
        <a href="#" className="nav-link">Probar Generador</a>
      </nav>

      {/* Botones de cuenta y modo */}
      <div className="cuenta-container">
        <button className="btn-cuenta" onClick={onOpenRegister}>
          <span>Iniciar sesión</span>
          <User size={18} className="user-icon" />
        </button>

        <button
          className="modo-toggle"
          onClick={() => setModoOscuro(!modoOscuro)}
        >
          {modoOscuro ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
