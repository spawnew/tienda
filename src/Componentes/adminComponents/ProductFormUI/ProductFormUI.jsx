export const ProductFormUI = ({
  product,
  errors, // trae los errores q pusimos en la carpeta utils> validateProducts.js
  loading,
  onChange, //onChange, me lo va a mandar el padre para usarlo en los hijos
  onFileChange, //para cargar imagenes desde la pc
  onSubmit,
}) => { //todas estas props van a venir del padre
  return (
    <section>
      <form className="flex flex-col item-center p-2 m-2 w-80 h-110 bg-black" onSubmit={onSubmit}>
        <h2>Agregar producto</h2>
        <div>
          <label>Nombre:</label>
          <input className="bg-gray-800 rounded m-1 w-70"
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>} 
        </div>
        <div>
          <label>Precio:</label>
          <input className="bg-gray-800 rounded m-1 w-70"
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            required
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div>
          <label>Categoria</label>
          <input className="bg-gray-800 rounded m-1 w-70" 
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
            required
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
          <label>Descripcion:</label>
          <textarea className="bg-gray-800 rounded m-1 w-70"
            name="description"
            value={product.description}
            onChange={onChange}
            required
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label>Imagen:</label>
          <input className="bg-gray-800 rounded m-1 w-70"
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button className="bg-gray-800 m-5 p-3 rounded hover:border-amber-200 hover:border-2" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};