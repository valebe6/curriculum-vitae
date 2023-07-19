import SobreMi from "./components/layouts/vistas/SobreMi";
import Experiencia from "./components/layouts/vistas/Experiencia";
import Habilidades from "./components/layouts/vistas/Habilidades";
import Portafolio from "./components/layouts/vistas/Portafolio"
import Principal from "./components/helpers/Principal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router=createBrowserRouter([
  {
    path:'/experiencia',
    element:<Experiencia/>
  },
  {
    path:'/sobre-mi',
    element:<SobreMi/>
  },
  {
    path:'/habilidades',
    element:<Habilidades/>
  },
  {
    path:'/portafolio',
    element:<Portafolio/>
  },
  {
    path:'/',
    element:<Principal/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
