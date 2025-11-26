import { Item } from "../Item/Item";
import  ContextCart  from "../../../Context/ContextCart.jsx"


import { useContext } from "react";

export const ItemDetail = ({ detail }) => {
    const { agregar } = useContext(ContextCart)

    return (

<div>
        
            <Item {...detail}>
                
                <button 
                    className="bg-blue-800 font-bold text-amber-200 p-1 rounded hover:border-amber-200 hover:border-2"
                    onClick={() => agregar(detail)}>Agregar al carrito</button>   
           
        </Item>   
</div>
       
    );
};