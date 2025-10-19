import React from 'react'
import datos from '../datos.js'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ContextCart from '../../../Context/ContextCart.jsx'
const Detalles = () => {
    const { agregar } = useContext(ContextCart)
    const { id } = useParams();
  
    const producto = datos.find((producto) => producto.id === parseInt(id))
    console.log(producto)
    return (

 
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950">
            <div className="flex flex-col items-center justify-center bg-amber-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-[22rem] text-center">
                <h2 className="text-2xl font-bold mb-3 text-blue-900">{producto.nombre}</h2>
                <img
                    src={producto.fotos}
                    alt={producto.nombre}
                    className="w-64 h-64 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-2">{producto.descripcion}</p>
                <p className="text-lg font-semibold mb-4">Precio: ${producto.precio}</p>
                <button
                    onClick={() => agregar(producto)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
export default Detalles