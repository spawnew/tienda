import React from 'react'
import datos from './datos.js'
import ProductoItem from './ProductoItem/ProductoItem.jsx'
import './productos.css'
import Form from '../Form/Form.jsx'
const Productos = () => {
  return (
      <div className='productos'>
          


          {datos.map((producto) => {
              return (<div key={producto.id}>
                <ProductoItem
               
                 id={producto.id}
                  nombre={producto.nombre} 
                  precio={producto.precio}
                   descripcion={producto.descripcion} 
                   imagen={producto.fotos}
                
                
                
                />
              </div>)
            
            
            
          })}





    </div>
  )
}

export default Productos