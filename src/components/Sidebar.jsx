import React from "react";
import { X, Home, FileText, Clock, Settings, User } from "lucide-react";

function Sidebar({ open, onClose, onGoHome, onOpenGenerador }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="sidebar-top">
        <button className="sidebar-close" onClick={onClose} aria-label="Cerrar menú">
          <X size={20} />
        </button>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-profile">
          <div className="avatar" />
        </div>

        <div className="sidebar-search">
          <input type="search" placeholder="Buscar..." />
        </div>

        <ul className="sidebar-list">
          <li onClick={() => { onGoHome && onGoHome(); }}>
            <Home size={18} /> <span>Inicio</span>
          </li>
          <li onClick={() => { onOpenGenerador && onOpenGenerador(); }}>
            <FileText size={18} /> <span>Nuevo chat</span>
          </li>
          <li>
            <FileText size={18} /> <span>Portafolio</span>
          </li>
          <li>
            <Clock size={18} /> <span>Recientes</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-settings" onClick={() => alert("Abrir ajustes")}>
          <Settings size={18} /> Ajustes
        </div>

        <div className="sidebar-user">
          <User size={18} />
          <div>
            <div className="sidebar-username">Nombre Usuario</div>
            <div className="sidebar-email">ejemplo@gmail.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
