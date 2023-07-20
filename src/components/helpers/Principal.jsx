import perfil from "../../assets/img/ValentinaBetancur.jpg";
import { Link } from "react-router-dom";
import Redes from "../layouts/Redes";

function Principal() {
  return (
    <main>
      <section>
        <section className="datos">
          <section>
            <img src={perfil} alt="Perfil" className="perfil" />
          </section>
          <section className="info">
            <h3>VALENTINA BETANCUR</h3>
            <h1>DESARROLLADORA JUNIOR</h1>
            <p>valentinabetancur0607@gmail.com</p>
            <Redes/>
          </section>
        </section>
        <section className="navegacion">
          <Link className="enlace" to={"/experiencia"}>
            Experiencia
          </Link>
          <Link className="enlace" to={"/sobre-mi"}>
            Sobre mi
          </Link>
          <Link className="enlace" to={"/portafolio"}>
            Portafolio
          </Link>
          <Link className="enlace" to={"/habilidades"}>
            Habilidades
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Principal;
