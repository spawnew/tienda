import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/LinkProduct.jsx'

const Home = () => {
  return (
    <div className=' flex flex-col  bg-gradient-to-b from-[#0b1444] to-[#081034] text-white"  '>
     
      
     
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
  
    
    
    </div>
   )
}

export default Home