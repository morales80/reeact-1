import React from 'react'

const BotonGeneral = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 mb-2">
          <button className="btn btn-primary btn-lg w-100">
            <span className='ms-2'>
              <i className="bi bi-person-add"></i>
              Activar cuenta.
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BotonGeneral
