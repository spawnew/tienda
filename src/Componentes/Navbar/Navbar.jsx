import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../Form/Form.jsx'
import './nav.css'
const Navbar = () => {
 
  
 
  return (
    <nav>

      <div className='titulo'>
        <h1>Imperio Yugioh</h1>
        <div className='buscador'>
          <Form/>
          

        </div>
        <div>
          <button>login</button>
        </div>
      </div>
      
        
       
       
      <ul>
        
        <li><NavLink to="/"><p>Mi Tienda</p></NavLink></li>
        <li><NavLink to="/producto">Productos</NavLink></li>
        <li><NavLink to="/categoria">Categorias</NavLink></li>
       
        <li><NavLink to="/carrito">Carrito</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
       

   </ul>


 
    </nav>

       




  
  )
}

export default Navbar