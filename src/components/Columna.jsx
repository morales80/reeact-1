import React from 'react'

const Columna = () => {
  return (
    <div className="container" style={{ backgroundColor: 'orange' }}>
      <br />
      <div className="row">
        <div className="col-12 col-md-6 mb-2">
          <button className="btn btn-primary btn-outline-warning btn-lg w-100">Crear Cuenta</button>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <button className="btn btn-primary btn-outline-warning btn-lg w-100">Iniciar Sesion</button>
        </div>
      </div>
      <br />
    </div>

  )
}

export default Columna
