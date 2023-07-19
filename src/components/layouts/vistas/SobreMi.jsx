import Principal from "../../helpers/Principal";

function SobreMi() {
  return (
    <section>
      <Principal />
      <section className="contenido sobremi">
        <section className="infoMia">
          <section className="titulo">SOBRE MI</section>
          <p>
            Me considero una persona responsable, con iniciativa y puntualidad,
            enfocada a la continua actualización de mis competencias afines con
            mi campo laboral. Soy una mujer joven, capacitada para aprender, con
            ganas de que me brinden la oportunidad de desempeñarme en mi campo y
            seguir aprendiendo. Cuento con capacidad de trabajo bajo presión,
            trabajar en equipo y desempeñarme en mis tareas.
          </p>
        </section>
        <section className="educacion">
          <section className="titulo">EDUCACION</section>
          <section>
            <div className="titulosAlineados">
              <h3>BACHILLERATO</h3>
              <p>2015-2021</p>
            </div>
            <h4>I.E Nicanor Restrepo Santamaría</h4>
          </section>
          <section>
            <div className="titulosAlineados">
              <h3>TECNICA ASISTENTE EN DESARROLLO DE SOFTWARE </h3>
              <p>2023</p>
            </div>
            <h4>Cesde</h4>
            <p>
              Conocimientos técnicos en desarrollo de software, con competencias
              para asistir el desarrollo de aplicativos tipo web, utilizando
              herramientas, metodologías y lenguajes de programación requeridos
              por el entorno productivo, demostrando respeto, orden y
              creatividad en su desempeño.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SobreMi;
