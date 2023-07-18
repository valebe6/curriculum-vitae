import HabilidadesPersonal from "./HabilidadesPersonal";
import HabilidadesTrabajo from "./HabilidadesTrabajo";

function Habilidades() {
  return (
    <section>
      <section className="titulo">HABILIDADES</section>
      <section>
        <section className="subtitulosHabilidades">
          HABILIDADES DEL TRABAJO
        </section>
        <HabilidadesTrabajo />
      </section>
      <section>
        <section className="subtitulosHabilidades">
          HABILIDADES PERSONALES
        </section>
        <HabilidadesPersonal />
      </section>
    </section>
  );
}

export default Habilidades;
