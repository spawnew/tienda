

import { useContext } from 'react'
import ContextCart from '../../Context/ContextCart.jsx'

const Carrito = () => {
  const { cart } = useContext(ContextCart)
   
   return (
    <div className='flex  justify-items-center justify-center text-gray-950 bg-gradient-to-r from-indigo-600 from-10% via-sky-500 via-30% to-indigo-600'>
      {cart.length === 0 ? (
        <h2 className='text-amber-50'>El carrito está vacío</h2>
      ) : (
        cart.map((item) => (
          <div className='bg-amber-50 w-3xl flex flex-row m-3 justify-between ' key={item.id}>
            <h2>{item.nombre}</h2>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio  ${(item.precio)*Number(item.cantidad) }</p>
            
          </div>
        ))
      )}
    </div>
  )
}
export default Carrito;