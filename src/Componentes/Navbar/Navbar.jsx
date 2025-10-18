import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../Form/Form.jsx'
import './nav.css'
import { FaCartShopping } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import ContextCart from '../../Context/ContextCart.jsx'
import { useContext } from 'react'
const Navbar = () => {
 
  const { contar } = useContext(ContextCart)
 
  return (
    <nav>

      <div className='titulo'>
        <h1>Mi Tienda</h1>
        <div className='buscador'>
          <Form/>
         

        </div>
        <div>
          <button className='login-btn'>Login <FiLogIn /></button>
        </div>
      </div>
      
        
       
       
      <ul>
        
        <li><NavLink to="/"><p>Mi Tienda</p></NavLink></li>
        <li><NavLink to="/producto">Productos</NavLink></li>
        <li><NavLink to="/categoria">Categorias</NavLink></li>
       
        <li><NavLink to="/carrito">Carrito  {contar()}<FaCartShopping />
</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
       

   </ul>


 
    </nav>

       




  
  )
}

export default Navbar