import React from 'react'
const Ejercicio02 = () => {
    const nombreProducto = "Camisa";

    function agregarACarritoCompra() {
        console.log(":::::::Agregando articulo: " + nombreProducto + "::::::::");
    }
    function eliminarDeCarritoCompra() {
        console.log(":::::::Eliminando articulo: " + nombreProducto + "::::::::");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h4 mt-4">Ejercicio 02 - Boton y funciones</h2>
                    <hr className='bg-primary' />
                </div>
                <div className="col-12 col-md-6 mb-2 d-flex justify-content-center">
                    <button className="btn btn-primary btn-outline-warning btn-lg w-100" onClick={agregarACarritoCompra}>
                        <i className="bi bi-openai"></i>
                        <span className='ms-3'>
                            Agregar Articulo
                        </span>
                    </button>
                </div>
                <div className="col-12 col-md-6 mb-2 d-flex justify-content-center">
                    <button className='btn btn-primary btn-outline-warning btn-lg w-100' onClick={eliminarDeCarritoCompra}>
                        <i className="bi bi-trash3"></i>
                        <span className='ms-3'>Borrar articulo</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ejercicio02
