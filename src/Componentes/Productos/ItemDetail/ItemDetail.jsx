import { Item } from "../Item/Item";
import  ContextCart  from "../../../Context/ContextCart.jsx"


import { useContext } from "react";

export const ItemDetail = ({ detail }) => {
    const { agregar } = useContext(ContextCart)

    return (

<div>
        
        <Item {...detail}>
        <button onClick={() => agregar(detail)}>Agregar al carrito</button>     
        </Item>   
</div>
       
    );
};