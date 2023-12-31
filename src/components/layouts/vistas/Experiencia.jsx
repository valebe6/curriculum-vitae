import Principal from "../../helpers/Principal";

function Experiencia() {
  return (
    <section>
      <Principal />
      <section className="titulo">EXPERIENCIA</section>
      <section className="contenido experiencia">
        <section>
          <div className="titulosAlineados">
            <h3>ATENCION AL CLIENTE</h3>
            <p>2021</p>
          </div>
          <h4>Almacén ortopédico</h4>
          <p>
            Atencion al cliente, verificacion de mercancía, papeleo de recepcion
            y contabilidad de mercancía, inventario.
          </p>
        </section>
        <section>
          <div className="titulosAlineados">
            <h3>ATENCION AL CLIENTE</h3>
            <p>2021</p>
          </div>
          <h4>Fiambres el encanto</h4>
          <p>
            Atencion al cliente, mesera, recepción de productos, aseo general,
            cajera temporal.
          </p>
        </section>
      </section>
    </section>
  );
}

export default Experiencia;
