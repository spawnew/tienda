import React from 'react'
import './producto.css'
import { Link } from 'react-router-dom'
const ProductoItem = ({producto}) => {
    const { nombre, precio, descripcion, fotos} = producto
 
  
  
    return (
<div className="flex flex-col bg-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-72 text-center">
           <Link to={`/producto/detalles/${producto.id}`} >
            <ul className='flex flex-col justify-center items-center'>
                <li>
                    <h2 className='text-gray-950 text-xl font-bold'>{nombre}</h2>
                    </li>
                    <li>
                        <img src={fotos} alt={nombre} />
                    </li>
                  <li>  
                <p>{descripcion}</p>
                </li> 
                 <li>
                    <p className='font-black font '>Precio:$ {precio}</p>
                </li> 
                
                
             </ul>
</Link>


    </div>
  )
}

export default ProductoItem