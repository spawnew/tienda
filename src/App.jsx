import './App.css'
import Contacto from './Componentes/Contacto/Contacto.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import Productos from './Componentes/Productos/Productos.jsx'
import Carrito from './Componentes/Carrito/Carrito.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categorias from './Componentes/Categorias/Categorias.jsx'
import Home from './Componentes/Home/Home.jsx'
import { CartProvider } from './Context/ContextCart.jsx'
import Detalles from './Componentes/Productos/Detalles/Detalles.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {/* Contenedor general con altura completa */}
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0b1444] to-[#081034]">
          <Navbar />
          
          {/* Área del contenido que se expande */}
          <main className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/categoria' element={<Categorias />} />
              <Route path='/producto' element={<Productos />} />
              <Route path='/producto/detalles/:id' element={<Detalles />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App