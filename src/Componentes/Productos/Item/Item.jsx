

export const Item = ({name, price, description, imageUrl, children}) => {
  
    return (
    <article className=" flex flex-col justify-center h-80 p-2 m-2 items-center  shadow-lg">
        <img   data-aos="fade-up"  className ="w-50 h-50 rounded border-amber-500 border-2"src={imageUrl} alt={description} />
        <p className="font-bold text-amber-100">{name}</p>
        <p data-aos="fade-up">Precio:${price}</p>
            <p data-aos="fade-up">Descripcion {description}</p>
            
            {children}
            
        </article>
    )       
};