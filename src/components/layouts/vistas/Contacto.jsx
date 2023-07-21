import Principal from "../../helpers/Principal";

const Contacto = () => {
  return (
    <section>
      <Principal />
      <h1 className="titulo">CONTACTO</h1>
      <section className="containerForm">
        <form className="formulario">
          <h2>Dejame tus datos para contactarte pronto.</h2>
          <label>Nombre</label>
          <input type="text" placeholder="Valentina Betancur" id="nombre" required />
          <label>Telefono</label>
          <input type="number" placeholder="1234567890" required />
          <label>Correo</label>
          <input type="email" placeholder="alguien@correo.com" required />
          <button>Enviar</button>
          
        </form>
      </section>
    </section>
  );
};

export default Contacto;
