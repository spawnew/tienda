import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

// Contextos
import { CartProvider } from './Context/ContextCart.jsx';
import { AuthProvider } from './Context/AuthContext/AuthProvider.jsx';

// Layouts
import { MainLayout } from './Layouts/MainLayout.jsx';
import { AdminLayout } from './Layouts/AdminLayout.jsx';

// Componentes
import Navbar from './Componentes/Navbar/Navbar.jsx';
import Footer from './Componentes/Footer/Footer.jsx';
import Home from './Componentes/Home/Home.jsx';
import Contacto from './Componentes/Contacto/Contacto.jsx';
import Carrito from './Componentes/Carrito/Carrito.jsx';
import { ItemListContainer } from './Componentes/Productos/ItemListContainer';
import { ItemDetailContainer } from './Componentes/Productos/ItemDetailContainer/ItemDetailContainer.jsx';
import { Login } from './Componentes/Login/Login.jsx';
import { RutaProtegida } from './Componentes/RutaProtegida/RutaProtegida';
import { ProductFormContainer } from './Componentes/adminComponents/ProductFormContainer/ProductFormContainer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>

          <Routes>

            {/* Layout principal */}
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/producto' element={<ItemListContainer />} />
              <Route path='/producto/:category' element={<ItemListContainer />} />
              <Route path='/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<Carrito />} />
            </Route>

            {/* Layout admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route 
                path="alta-productos"
                element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }
              />
            </Route>

          </Routes>

          {/* Toast */}
          <ToastContainer 
            position="top-right"
            autoClose={1000}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover
            draggable
            theme="blue"
          />

          <Footer />

        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;