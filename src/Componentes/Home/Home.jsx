import React from 'react'
import  Opiniones from '../Opiniones/Opiniones.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import LinkProduct from '../linkProduct/linkProduct.jsx'

const Home = () => {
  return (
    <div>
      
      <p className='flex flex-2'></p>
      
     
      <Sobre></Sobre>
      <LinkProduct></LinkProduct>
    <Opiniones/>
    
    
    
    </div>
   )
}

export default Home