

export const Item = ({name, price, description, imageUrl, children}) => {
   
    return (
    <article className=" flex flex-col items-center   shadow-lg">
        <img src={imageUrl} alt={description} />
        <h2 className="">{name}</h2>
        <p>Precio:${price}</p>
            <p>Descripcion {description}</p>
             
        {children}
    </article>
);
};