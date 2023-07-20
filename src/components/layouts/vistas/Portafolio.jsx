import Principal from "../../helpers/Principal"
import portafolio1 from "../../../assets/img/portafolio1.jpeg"
import portafolio2 from "../../../assets/img/portafolio2.jpeg"
import { Link } from "react-router-dom"

const Portafolio = () => {
  return (
    <section>
        <Principal/>
        <h1 className="titulo">PORTAFOLIO</h1>
        <section className="containerCards">
          <section className="card">
            <img src={portafolio1} alt="" />
            <p>El proyecto DevEd fue sobre una institucion que realizaba cursos tecnicos virtuales.</p>
            <Link className="enlacePortafolio" to={"https://github.com/valebe6/DevEd"}>Ver más</Link>
          </section>
          <section className="card">
            <img src={portafolio2} alt="" />
            <p>El proyecto DevEd fue sobre una institucion que realizaba cursos tecnicos virtuales.</p>
            <Link className="enlacePortafolio" to={"https://github.com/valebe6/Kids_Bank"}>Ver más</Link>
          </section>
        </section>
    </section>
  )
}

export default Portafolio