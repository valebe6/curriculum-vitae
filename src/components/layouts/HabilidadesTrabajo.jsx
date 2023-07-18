import CuadradoLleno from "./CuadradoLleno";
import CuadradoVacio from "./CuadradoVacio";

function HabilidadesTrabajo() {
  return (
    <section>
      <section className="habilidad">
        <p>HTML </p>
        <div className="cuadraditos">
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoVacio />
        </div>
      </section>
      <section className="habilidad">
        <p>CSS</p>
        <div className="cuadraditos">
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoVacio />
          <CuadradoVacio />
        </div>
      </section>
      <section className="habilidad">
        <p>JAVASCRIPT</p>
        <div className="cuadraditos">
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoVacio />
        </div>
      </section>
    </section>
  );
}

export default HabilidadesTrabajo;
