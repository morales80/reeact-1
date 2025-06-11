import Ejercicio01 from "./components/ejercicio01"
import BotonGeneral from "./components/BotonGeneral"
import Columna from "./components/Columna"
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="h1 mt-2 text-center alert alert-success">Hola UTSH</div>
        </div>
      </div>
          <Ejercicio01/>
          <br />
          <BotonGeneral/>
          <br />
          <Columna/>
    </div>
    //mandando a llamar componente externo
  )
}

export default App


