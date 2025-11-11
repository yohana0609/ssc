import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Generador from "./components/Generador";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [vista, setVista] = useState("inicio"); // "inicio" | "login" | "register"

  // ✅ Cambia la clase del <body> según el modo
  useEffect(() => {
    document.body.classList.remove("modo-oscuro", "modo-claro");
    document.body.classList.add(modoOscuro ? "modo-oscuro" : "modo-claro");
  }, [modoOscuro]);

  // ✅ Vuelve al inicio tras login o registro
  const handleVolverInicio = () => setVista("inicio");

  return (
    <div className="app-container">
      {/* 🔹 Encabezado */}
      <Header
        modoOscuro={modoOscuro}
        setModoOscuro={setModoOscuro}
        onOpenSidebar={() => console.log("Abrir menú lateral")}
        onOpenRegister={() => setVista("login")}
        onGoHome={() => setVista("inicio")}                // nuevo
        onProbarGenerador={() => setVista("inicio")} 
      />
      

      {/* 🔹 Contenido dinámico */}
      <main className="contenido-principal">
        {vista === "inicio" && <Generador />}
        {vista === "login" && (
          <LoginForm
            onSwitchToRegister={() => setVista("register")}
            onLoginSuccess={handleVolverInicio}
          />
        )}
        {vista === "register" && (
          <RegisterForm
            onSwitchToLogin={() => setVista("login")}
            onRegisterSuccess={handleVolverInicio}
          />
        )}
      </main>

      {/* 🔹 Footer moderno */}
      <Footer />
    </div>
  );
}

export default App;
