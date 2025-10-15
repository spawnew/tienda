import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
  return (
    <nav>

      <ul>
        <li><p>Mi Tienda</p></li>
        <li><NavLink to="/">Productos</NavLink></li>
        <li><NavLink to="/categoria">Categorias</NavLink></li>
       
        <li><NavLink to="/carrito">Carrito</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
       

   </ul>


 
    </nav>

       




  
  )
}

export default Navbar