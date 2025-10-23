import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/linkProduct.jsx'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-blue-900 to-black  flex flex-col items-center justify-center gap-8 p-4'>
      
      <p className='flex flex-2'></p>
      
     
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
    
    
    
    </div>
   )
}

export default Home