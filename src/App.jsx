
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
    <div className="flex flex-col min-h-screen">  {/* Estructura base */}
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          
          {/* Contenido principal */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categoria" element={<Categorias />} />
              <Route path="/producto" element={<Productos />} />
              <Route path="/producto/detalles/:id" element={<Detalles />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </main>

          {/* Footer al final */}
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App