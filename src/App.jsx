import Datos from "./components/layouts/Datos";
import SobreMi from "./components/layouts/SobreMi";
import Nombre from "./components/layouts/Nombre";
import Experiencia from "./components/layouts/Experiencia";
import Educacion from "./components/layouts/Educacion";
import Habilidades from "./components/layouts/Habilidades";

function App() {
  return (
    <main className="cuerpo">
      <section className="lateral">
        <Datos />
        <SobreMi />
        <Habilidades />
      </section>
      <section className="principal">
        <Nombre />
        <Experiencia />
        <Educacion />
      </section>
    </main>
  );
}

export default App;
