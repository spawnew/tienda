

import { useContext } from 'react'
import ContextCart from '../../Context/ContextCart.jsx'

const Carrito = () => {
  const { cart,deleteCart } = useContext(ContextCart)
  
   console.log(cart)
   return (
    <div className='flex flex-col min-h-screen items-center text-gray-950 '>
     
       {cart.length === 0 ? (
        <h2 className='text-amber-50'>El carrito está vacío</h2>
      ) : (
        cart.map((item) => (
          <div className='text-amber-100 w-3xl flex flex-col m-2 bg-gray-800 ' key={item.id}>
            <div className='flex flex-row justify-around '><h2>{item.name}</h2>
            <p>Cantidad: {item.cantidad}</p>
              <p>Precio  ${(item.price) * Number(item.cantidad)}</p>
            
            </div>
            
          </div>
        ))
           
       )}
       
       <p className='font-extrabold text-amber-100 '>Total a pagar: $ {cart.reduce((acc, p) => acc + p.price * p.cantidad, 0)}</p>
       <div className='flex gap-4'> 
       <button className="bg-blue-800 font-bold text-amber-200 p-1 rounded hover:border-amber-200 hover:border-2"
         onClick={() => deleteCart()}>Vaciar Carrito</button>
       <button className="bg-blue-800 font-bold text-amber-200 p-1 rounded hover:border-amber-200 hover:border-2"
         onClick={() => deleteCart()}>Comprar</button>
       </div>
    </div>
  )
}
export default Carrito;