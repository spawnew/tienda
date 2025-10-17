import React from 'react'
import './producto.css'
import { useContext } from 'react'
import ContextCart from '../../../Context/ContextCart.jsx'
const ProductoItem = ({producto}) => {
    const { nombre, precio, descripcion, fotos} = producto
 const { agregar } = useContext(ContextCart)
  
  
    return (
        <div className='producto'> 
            
            <ul>
                <li>
                    <h2>{nombre}</h2>
                    </li>
                    <li>
                        <img src={fotos} alt={nombre} />
                    </li>
                  <li>  
                <p>{descripcion}</p>
                </li> 
                 <li>
                    <p>Precio: ${precio}</p>
                </li> 
                <li>
                    <button onClick={()=>agregar(producto)}><p>Agregar al carrito</p></button>
                    </li> 
                
             </ul>



    </div>
  )
}

export default ProductoItem