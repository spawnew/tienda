import React from 'react'
import datos from './datos.js'
import ProductoItem from './ProductoItem/ProductoItem.jsx'
import './productos.css'
import Form from '../Form/Form.jsx'
const Productos = () => {
  return (
      <div className='flex flex-row flex-wrap items-center justify-center gap-4 p-4 bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 min-h-[90vh]'>
          


          {datos.map((producto) => {
              return (<div key={producto.id}>
                <ProductoItem
               
                producto={producto}
                
                
                
                />
              </div>)
            
            
            
          })}





    </div>
  )
}

export default Productos