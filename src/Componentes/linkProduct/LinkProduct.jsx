import React from 'react'

const LinkProduct = () => {
  return (
    <div className="flex flex-col items-center text-amber-50 px-4 py-10">
      
      <p className="text-lg text-center mb-1">
        Para ver las nuestras en stock.
      </p>

      <p className="text-lg text-center mb-6">
        Si quieres ver más cartas que tenemos en stock, puedes visitar nuestro drive.
      </p>

      {/* Imagen + frase */}
      <div className="flex flex-col items-center">
        <a
          href="https://drive.google.com/drive/u/0/folders/1QMC-FI6N5I1CN17iMVa5HbBq0O3QAyX4?fbclid=IwY2xjawJs_YtleHRuA2FlbQIxMAABHqldnBrR20KKUwc9sPmciqWPF4u5UVoSTpkSW6P5KkynggQc6q7tfODRnoUc_aem_LyUpIaHql32uX8-onSb7Og"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-300"
        >
          <img
            className="rounded-lg border-4 border-amber-400 w-72 h-64 object-cover"
            src="https://www.hobbycorneregypt.com/cdn/shop/collections/yu-gi-oh-648878.jpg?v=1734332899"
            alt="Cartas Yu-Gi-Oh!"
            loading="lazy"
          />
        </a>

        <p className="text-amber-300 italic mt-3 text-center">
          "El poder del duelo está en tus manos."
        </p>
      </div>

    </div>
  )
}

export default LinkProduct