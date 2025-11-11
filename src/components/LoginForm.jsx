import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";

function LoginForm({ onSwitchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Simulación de inicio de sesión exitoso
    alert(`Inicio de sesión exitoso para: ${email}`);
    if (onLoginSuccess) onLoginSuccess(); // vuelve al inicio
  };

  return (
    <div className="formulario-container">
      <h2 className="form-title">Iniciar Sesión</h2>
      <p className="form-subtitle">Accede con tu cuenta</p>

      <form onSubmit={handleLogin} className="form">
        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <LogIn size={18} />
          Entrar
        </button>
      </form>

      <div className="switch-text">
        ¿No tienes cuenta?{" "}
        <button type="button" className="btn-switch" onClick={onSwitchToRegister}>
          Crear una
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
