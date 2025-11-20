import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import opinion from './opinion'

const Opiniones = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  }

  return (
    <div className="text-center text-white p-8 ">
      <h2 className=" text-1xl md:text-3xl md:font-bold md:mb-8">Comentarios de nuestros compradores</h2>

      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {opinion.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 items-center md:items-start justify-center md:justify-start gap-8"
            >
              {/* Imagen + nombre */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <img
                  className="rounded-full w-28 h-28 mb-3 border-4 border-amber-400 object-cover"
                  src={item.foto}
                  alt={item.nombre}
                />
                <p className="text-amber-100 font-semibold text-lg">{item.nombre}</p>
              </div>

              {/* Comentario (a la derecha de la foto) */}
              <div className="md:w-2/3 text-left">
                <p className="text-amber-50 italic font-medium text-lg leading-relaxed">
                  “{item.comentario}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Opiniones
