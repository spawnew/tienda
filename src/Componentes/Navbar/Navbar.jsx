import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../Form/Form.jsx'

import { FaCartShopping } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import ContextCart from '../../Context/ContextCart.jsx'
import { useContext } from 'react'
const Navbar = () => {
 
  const { contar } = useContext(ContextCart)
 
  return (
    <nav  className=" flex flex-col bg-blue-950 flex-wrap md:text-2sm hover:scale-105 transition duration-300   text-white p-1  shadow-lg  md:flex-row md:justify-around md:items-center ">

      <div className='titulo flex flex-col md:flex-row md:items-center gap-4 '>
        <NavLink to="/"><h1 className='font-bold text-2xl '>Imperio Yugioh</h1></NavLink>
        
          <div className='buscador'>
          <Form/>
         

        </div>
        <div>
          
        </div>
      </div>
      
        
       
       
      <ul className='flex justify-center flex-wrap items-center text-2xl   md:flex-row md:items-center gap-6 md:text-sm font-medium  '>
        <li><button className=''>Login <FiLogIn /></button></li>
        <li className='hover:border-b-1'><NavLink to="/"><p>Home</p></NavLink></li>
        <li className='hover:border-b-1'><NavLink to="/producto">Productos</NavLink></li>
        <li className='hover:border-b-1'><NavLink to="/categoria">Categorias</NavLink></li>
       
        <li><NavLink to="/carrito">Carrito  {contar()}<FaCartShopping />
</NavLink></li>
        <li className='hover:border-b-1'><NavLink to="/contacto">Contacto</NavLink></li>
       

   </ul>


 
    </nav>

       




  
  )
}

export default Navbar