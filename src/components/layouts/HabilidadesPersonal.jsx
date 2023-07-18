import CuadradoLleno from "./CuadradoLleno";
import CuadradoVacio from "./CuadradoVacio";

function HabilidadesPersonal() {
  return (
    <section>
      <section className="habilidad">
        <p>EMPATÍA </p>
        <div className="cuadraditos">
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoVacio />
        </div>
      </section>
      <section className="habilidad">
        <p>COMPAÑERISMO</p>
        <div className="cuadraditos">
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoVacio />
          <CuadradoVacio />
        </div>
      </section>
      <section className="habilidad">
        <p>DIVERSIDAD</p>
        <div className="cuadraditos">
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoLleno />
          <CuadradoVacio />
        </div>
      </section>
      <section className="habilidad">
        <p>POSITIVISMO</p>
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

export default HabilidadesPersonal;
