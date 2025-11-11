import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Generador from "./components/Generador.jsx";

function App() {
  const [modoOscuro, setModoOscuro] = useState(true);

  useEffect(() => {
    document.body.className = modoOscuro ? "modo-oscuro" : "modo-claro";
  }, [modoOscuro]);

  return (
    <>
      <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      <main>
        <Generador />
      </main>
    </>
  );
}

export default App;
