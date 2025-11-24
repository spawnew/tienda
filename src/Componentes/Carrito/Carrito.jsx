

import { useContext } from 'react'
import ContextCart from '../../Context/ContextCart.jsx'

const Carrito = () => {
  const { cart } = useContext(ContextCart)
   console.log(cart)
   return (
    <div className='flex flex-col min-h-screen items-center text-gray-950 bg-gradient-to-b   from-blue-900 to-black'>
     
       {cart.length === 0 ? (
        <h2 className='text-amber-50'>El carrito está vacío</h2>
      ) : (
        cart.map((item) => (
          <div className='text-amber-100 w-3xl flex flex-col m-2 bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 ' key={item.id}>
            <div className='flex flex-row justify-around '><h2>{item.name}</h2>
            <p>Cantidad: {item.cantidad}</p>
              <p>Precio  ${(item.price) * Number(item.cantidad)}</p>
              <p className=''></p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
export default Carrito;