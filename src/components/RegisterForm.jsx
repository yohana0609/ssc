import React, { useState } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";

function RegisterForm({ onSwitchToLogin }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    alert(`Cuenta creada exitosamente para: ${nombre}`);
    onSwitchToLogin();
  };

  return (
    <div className="formulario-container">
      <h2 className="form-title">Crear Cuenta</h2>
      <p className="form-subtitle">Regístrate para comenzar</p>

      <form onSubmit={handleRegister} className="form">
        <div className="input-group">
          <User className="input-icon" size={18} />
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <Lock className="input-icon" size={18} />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button type="submit" className="btn-entrar">
          <UserPlus size={18} />
          Registrar
        </button>
      </form>

      <div className="switch-text">
        ¿Ya tienes cuenta?{" "}
        <button type="button" className="btn-switch" onClick={onSwitchToLogin}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
