import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/LinkProduct.jsx'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-blue-900 to-black '>
     
      
     
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
    
    
    
    </div>
   )
}

export default Home