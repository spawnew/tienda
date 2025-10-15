
import './App.css'
import Contacto from './Componentes/Contacto/Contacto.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import Productos from './Componentes/Productos/Productos.jsx'
import Carrito from './Componentes/Carrito/Carrito.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categorias from './Componentes/Categorias/Categorias.jsx'
import Home from './Componentes/Home/Home.jsx'
function App() {
 

  return (
    <>
      <BrowserRouter>
      
      <Navbar />
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categoria' element={<Categorias/>}/>
      <Route path='/producto' element={<Productos/>}/>
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito/>}/>
     
      </Routes>
     
      <Footer />
      
      
      </BrowserRouter>
 
      
     
     
      
 
         
      
    </>
  )
}

export default App