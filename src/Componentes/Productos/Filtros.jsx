import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import { useState } from 'react';
import './Filtros.css'

const Filtros = () => {

  const [active, setActive] = useState('todos')

  function activado(value){
    setActive(value);
  }

  return (
    <div className='Myswiper'>
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="swiper"
        slidesPerView={6}
        breakpoints={{
            0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },

            550: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            },

            700: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            },

            1024: {
            slidesPerView: 6,
            spaceBetween: 20,
            },


            1800: {
            slidesPerView: 6,
            spaceBetween: 100,
            }

        }}>

            <SwiperSlide>
            <span 
            className={active === 'todos' ? 'active': ''}
            onClick={() => activado('todos')}>Todos</span>
            </SwiperSlide>

            <SwiperSlide>
            <span 
            className={active === 'nuevo' ? 'active': ''}
            onClick={() => activado('nuevo')}>Nuevo</span>
            </SwiperSlide>
            
            <SwiperSlide>
            <span
            className={active === 'hombre' ? 'active': ''}
             onClick={() => activado('hombre')}>Hombre</span>
            </SwiperSlide>

            <SwiperSlide>
            <span
            className={active === 'mujer' ? 'active': ''}
             onClick={() => activado('mujer')}>Mujer</span>
            </SwiperSlide>
            
            <SwiperSlide>
            <span
            className={active === 'ofertas' ? 'active': ''}
            onClick={() => activado('ofertas')}>Ofertas</span>
            </SwiperSlide>
            
            <SwiperSlide>
            <span 
            className={active === 'limitados' ? 'active': ''}
            onClick={() => activado('limitados')}>Limit</span>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Filtros