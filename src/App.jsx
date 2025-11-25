
import Contacto from './Componentes/Contacto/Contacto.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import { ItemListContainer }  from './Componentes/Productos/ItemListContainer'
import Carrito from './Componentes/Carrito/Carrito.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Componentes/Home/Home.jsx'
import { CartProvider } from './Context/ContextCart.jsx'
import {ItemDetailContainer} from './Componentes/Productos/ItemDetailContainer/ItemDetailContainer.jsx'
import './App.css'
import { AuthProvider } from './Context/AuthContext/AuthProvider.jsx'
import {Login} from './Componentes/Login/Login.jsx'
import {RutaProtegida} from './Componentes/RutaProtegida/RutaProtegida'
import { MainLayout } from './Layouts/MainLayout.jsx'
import { AdminLayout } from './Layouts/AdminLayout.jsx'
import { ProductFormContainer } from './Componentes/adminComponents/ProductFormContainer/ProductFormContainer'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

  
      <CartProvider>
       
       
        
          
         
        
          <Routes>
             <Route element={<MainLayout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/producto/:category' element={<ItemListContainer />} />
              <Route path='/producto' element={<ItemListContainer />} />
              <Route path='/detail/:id' element={<ItemDetailContainer/>} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<Carrito />} />
            </Route>
            
           <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<Login />} />
              
                <Route 
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>
                  } 
                />
              </Route>
          </Routes >
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
  )
}

export default App