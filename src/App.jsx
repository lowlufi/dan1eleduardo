import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Daniel Eduardo Aguilera Campusano</h1>
        <h2>Ingeniero Informático con mención en Gestión de la Información </h2>
            <h3>Licenciado en Ciencias de la Ingeniería</h3>
              <p><code>Desarrollador</code></p>
            <button>
          <a href="/Daniel_CV.pdf" target="_blank">
            Descargar CV 
          </a>
        </button>
    
            <div>
        <a
          href="https://www.linkedin.com/in/danielaguileracampusano/"
          target="_blank"
        >
          <img src="/linkedin.svg" className="logo " alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/lowlufi" target="_blank">
          <img src="/github.svg" className="logo Github" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
