import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import Tarjetas from './Tarjetas';
import {Link} from 'react-router-dom'

import { products } from "./../../../products";


const CamisetaSlider = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
      };

  return (

    <div>
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="swiper"
        slidesPerView={3}
        breakpoints={{
            0: {
                slidesPerView: 1.05,
                spaceBetween: 10,
            },

            480: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },

            650: {
                slidesPerView: 2,
                spaceBetween: 35,
            },

            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1500: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            }

        }}>

            {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/productos/${product.id}`} onClick={handleClick}>
                <Tarjetas 
                 imagen={product.foto}
                 titulo={product.name} 
                 descripcion={product.tipo} 
                 precio={product.price} />
              </Link>
            </SwiperSlide>
            ))}

        </Swiper>
    </div>
  )
}

export default CamisetaSlider