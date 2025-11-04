import React from 'react'
import datos from './datos.js'
import ProductoItem from './ProductoItem/ProductoItem.jsx'
import './productos.css'
import Form from '../Form/Form.jsx'
const Productos = () => {
  return (
      <div className='flex flex-row bg-blue-950 @md:flex-col flex-wrap items-center justify-center gap-4 p-4 <body class="min-h-screen bg-gradient-to-b from-darkTop to-darkBottom text-textMain hover:shadow-xl transition duration-300'>
          


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