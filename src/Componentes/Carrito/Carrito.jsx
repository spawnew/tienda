

import { useContext } from 'react'
import ContextCart from '../../Context/ContextCart.jsx'
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { cart,deleteCart,comprar  } = useContext(ContextCart)
  
   console.log(cart)
   return (
    <div className='flex flex-col    min-h-screen items-center text-gray-950  p-4'>
     
       {cart.length === 0 ? (
        <h2 className='text-amber-50'>El carrito está vacío</h2>
      ) : (
           cart.map((item) => (
          
          <div className='text-amber-300  w-60 md:min-w-screen m-2  justify-around items-center   flex flex-col  ' key={item.id}>
            <div className='flex flex-col md:flex-row  '>
              <h2 className='pr-3'>{item.name}</h2>
            <p className='pr-3'>Cant: {item.cantidad}</p>
              <p>Precio  ${(item.price) * Number(item.cantidad)}</p>
            
            </div>
            
               </div>
              
        ))
           
       )}
       
       <p className='font-extrabold text-amber-100 '>Total a pagar: $ {cart.reduce((acc, p) => acc + p.price * p.cantidad, 0)}</p>
       <div className='flex gap-4'> 
       <button className="bg-blue-800 font-bold text-amber-200 p-1 rounded hover:border-amber-200 hover:border-2"
         onClick={() => deleteCart()}>Vaciar Carrito</button>
       <Link to="/">
         <button className="bg-blue-800 font-bold text-amber-200 p-1 rounded hover:border-amber-200 hover:border-2"
           onClick={() => comprar() }>Comprar</button>
        </Link>
       </div>
    </div>
  )
}
export default Carrito;