import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/LinkProduct.jsx'

const Home = () => {
  return (
    <div className=' flex flex-col min-h-screen bg-gradient-to-b from-[#0b1444] to-[#081034] text-white"  '>
     
      
     <div className='flex-grow'>
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
    </div>
    
    
    </div>
   )
}

export default Home