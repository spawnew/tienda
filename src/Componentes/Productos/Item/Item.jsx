

export const Item = ({name, price, description, imageUrl, children}) => {
   
    return (
    <article className=" flex flex-col justify-center h-80 p-2 m-2 items-center  shadow-lg">
        <img className ="w-50 h-50 rounded"src={imageUrl} alt={description} />
        <p className="font-bold text-amber-100">{name}</p>
        <p>Precio:${price}</p>
            <p>Descripcion {description}</p>
             
        {children}
    </article>
);
};