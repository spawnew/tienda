import React from 'react'
import datos from './datos.js'
const Productos = () => {
  return (
      <div>
          


          {datos.map((producto) => {
              return (<div key={producto.id}>
                  <h2>{producto.nombre}</h2>
              </div>)
            
            
            
          })}





    </div>
  )
}

export default Productos