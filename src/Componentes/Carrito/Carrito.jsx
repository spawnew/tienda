

import { useContext } from 'react'
import ContextCart from '../../Context/ContextCart.jsx'

const Carrito = () => {
  const { cart } = useContext(ContextCart)
   
   return (
    <div>
      {cart.length === 0 ? (
        <h1>El carrito está vacío</h1>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.nombre}</h2>
            <p>Cantidad: {item.cantidad}</p>
          </div>
        ))
      )}
    </div>
  )
}
export default Carrito;