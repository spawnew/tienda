import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/LinkProduct.jsx'

const Home = () => {
  return (
    <div className='flex flex-col bg-blue-950 @md:flex-col flex-wrap items-center justify-center gap-4 p-4   hover:shadow-xl transition duration-300'>
  
     
      
     
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
  
    
    
    </div>
   )
}

export default Home