import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://www.linkedin.com/in/danielaguileracampusano/"
          target="_blank"
        >
          <img src="/linkedin.svg" className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/lowlufi" target="_blank">
          <img src="/github.svg" className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Daniel Eduardo Aguilera Campusano</h1>

      <div className="card">
        <p>
          Ingeniero Informático con mención en Gestión de la Información y
          Licenciado en Ciencias de la Ingeniería
        </p>
        <p>
          <code>Desarrollador Junior/</code>
        </p>

        <button>
          <a href="/Daniel_CV.pdf" target="_blank">
            Descargar CV
          </a>
        </button>
      </div>
      <p className="read-the-docs">Click para descargar mi CV/</p>
    </>
  );
}

export default App;
