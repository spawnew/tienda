import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
     

       

       
        
       
        
     

      <div className="text-center text-sm text-gray-500 mt-6  border-blue-800 ">
        © {new Date().getFullYear()} Imperio Yugioh. Todos los derechos reservados.
      </div>
    </div>
  )
}

export default Footer
