import React, { useContext } from 'react'
import Captura from '../../Assets/Captura.jpg'
import { NavLink } from 'react-router-dom'


import { FaCartShopping } from "react-icons/fa6"
import { FiLogIn } from "react-icons/fi"

import ContextCart from '../../Context/ContextCart.jsx'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { contar } = useContext(ContextCart)

  return (
    <nav className="flex flex-col  bg-blue-950 md:flex-row  md:justify-between   items-center px-8 py-4 text-white shadow-lg gap-4">
      
  <div className="flex items-center gap-2">
  <NavLink to="/" className="flex items-center gap-2">
      <img
        className="rounded-xl w-10  hover:scale-105 transition"
        src={Captura}
      />
      <h1 className="font-bold text-2xl hover:scale-105 transition text-amber-400">
        Imperio Yugioh
      </h1>
  </NavLink>
</div>

     
      <ul className="flex flex-col text-amber-200 md:flex-row items-center gap-4 text-lg md:text-sm font-medium">

       <Link to="/admin">
        <li>
          <button className="flex items-center gap-1 hover:scale-105 transition">
            Login <FiLogIn className="text-xl"/>
          </button>
        </li>
</Link>
        <li className="hover:border-b border-white">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="hover:border-b border-white">
          <NavLink to="/producto">Productos</NavLink>
        </li>

        <li className="hover:border-b border-white">
          <NavLink to="/producto/sellado">Sellado</NavLink>
        </li>
         <li className="hover:border-b border-white">
          <NavLink to="/producto/individual">Cartas</NavLink>
        </li>

        <li className="hover:scale-105 transition flex items-center gap-1">
          <NavLink to="/carrito" className="flex items-center gap-1">
            Carrito {contar()} <FaCartShopping className="text-xl"/>
          </NavLink>
        </li>

        <li className="hover:border-b border-white">
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar