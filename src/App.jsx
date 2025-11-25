import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { CartProvider } from './Context/ContextCart.jsx';
import { AuthProvider } from './Context/AuthContext/AuthProvider.jsx';
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";

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

          
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/producto' element={<ItemListContainer />} />
              <Route path='/producto/:category' element={<ItemListContainer />} />
              <Route path='/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<Carrito />} />
            </Route>

          
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

          <ToastContainer 
            position="top-right"
            autoClose={1000}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover
            draggable
            theme="Blue"
          />

          <Footer />

        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;