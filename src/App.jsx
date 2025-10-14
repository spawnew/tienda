
import './App.css'
import Contacto from './Componentes/Contacto/Contacto.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import Productos from './Componentes/Productos/Productos.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
      
      <Navbar />
     
      <Routes>
      <Route path='/' element={<Productos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
     
      </Routes>
     
      <Footer />
      
      
      </BrowserRouter>
 
      
     
     
      
 
         
      
    </>
  )
}

export default App