import React from 'react'
import  './producto.css'
const ProductoItem = ({id, nombre, precio, descripcion, imagen}) => {
  
 
  
  
    return (
        <div className='producto'> 
            <ul>
                <li>
                    <h2>{nombre}</h2>
                    </li>
                    <li>
                        <img src={imagen} alt={nombre} />
                    </li>
                  <li>  
                <p>{descripcion}</p>
                </li> 
                 <li>
                    <p>Precio: ${precio}</p>
                    </li> 
                
             </ul>



    </div>
  )
}

export default ProductoItem