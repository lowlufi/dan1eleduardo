import { useState } from "react";
//import "./App.css";
import "./proyectos.css";
function Proyectos() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section class="layout">
        <div class="amigasyamigos">amigas y amigos por los cementerios</div>
        <div class="huertoscomunitarios">Huertos Comunitarios</div>
        <div class="findy">Findy</div>
      </section>
    </>
  );
}

export default Proyectos;
