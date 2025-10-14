
import './App.css'
import Contacto from './Componentes/Contacto/Contacto.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import Productos from './Componentes/Productos/Productos.jsx'
import {Routes,Route, BrowserRouter} from 'react-router-dom' 
function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Productos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
     
      </Routes>
     
      <Footer />
    </>
)}
export default App
