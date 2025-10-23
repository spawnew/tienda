import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/LinkProduct.jsx'

const Home = () => {
  return (
    <div className=' flex flex-col bg-gradient-to-b   from-blue-900 to-black min-h-screen   '>
     
      
     <div className='flex-grow'>
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
    </div>
    
    
    </div>
   )
}

export default Home