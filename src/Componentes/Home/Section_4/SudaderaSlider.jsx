import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import Tarjetas from './Tarjetas';
import { products } from "./../../../products_sudadera.js";


const SudaderaSlider = () => {
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
                slidesPerView: 1,
                spaceBetween: 10,
            },

            480: {
                slidesPerView: 1,
                spaceBetween: 35,
            },

            780: {
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
                slidesPerView: 3,
                spaceBetween: 30,
            }

        }}>
            {products.map((product) => (
            <SwiperSlide>
              <div key={product.id}>
                <Tarjetas 
                 imagen={product.foto}
                 titulo={product.name} 
                 descripcion={product.descripcion} 
                 precio={product.price} />
              </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default SudaderaSlider