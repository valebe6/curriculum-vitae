import perfil from "../../assets/img/ValentinaBetancur.jpg";
import { Link } from "react-router-dom";
import fondo from "../../assets/img/fondoEncabezado.png";

function Principal() {
  return (
    <main>
      {/* <section>
        <img src={fondo} className="fondoEncabezado" />
      </section> */}
      <div>
        <section className="datos">
          <img src={perfil} alt="Perfil" className="perfil" />
          <h1>VALENTINA BETANCUR</h1>
          <h3>DESARROLLADORA JUNIOR</h3>
          <p>valentinabetancur0607@gmail.com</p>
          <p>3016365181</p>
        </section>
        <section className="lateral">
          <Link to={"/experiencia"}>Experiencia</Link>
          <Link to={"/sobre-mi"}>Sobre mi</Link>
          <Link to={"/portafolio"}>Portafolio</Link>
          <Link to={"/habilidades"}>Habilidades</Link>
        </section>
      </div>
    </main>
  );
}

export default Principal;
