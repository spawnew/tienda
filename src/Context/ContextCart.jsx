
import { createContext, useState } from "react";

  const ContextCart= createContext(null);

export const CartProvider = ({ children }) => {
 const controlar=(id) => {
    const item = cart.find((item) => item.id === id);
    return item;
}
const [cart, setCart] = useState([]);
   
    const agregar = (item) => {
        if (controlar(item.id)) {
            setCart(cart.map((item) => item.id === item.id ? { ...item,  cantidad: item.cantidad + 1 } : item));
    } else {
        setCart([...cart, { ...item, cantidad: 1 }]);
    }
}

const contar = () => {
    return cart.length;
}

    const carrito = {
        cart, setCart, agregar,contar
    }
return (
        <ContextCart.Provider value={carrito}>
            {children}
        </ContextCart.Provider>
    );
};
export default ContextCart;