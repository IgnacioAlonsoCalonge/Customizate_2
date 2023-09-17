import React, { useEffect, useState} from 'react'
import './Estampados.css'
import { useParams } from 'react-router-dom'
import {estampados} from '../../estampados'
import blanco from '../../Assets/Camisetas_Color/Camiseta_blanca_2.png'
import negro from '../../Assets/Camisetas_Color/Camiseta_Negra.png'
import roja from '../../Assets/Camisetas_Color/Camiseta_Roja.png'
import verde from '../../Assets/Camisetas_Color/Camiseta_Verde_Oscuro.png'
import gris from '../../Assets/Camisetas_Color/Camiseta_Gris.png'
import gris_clarito from '../../Assets/Camisetas_Color/Camiseta_Gris_Clarito.png'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import Boton_2 from '../Botones/Boton_2'
import Dropdown from '../Botones/Dropdown'
import fondo from '../../Assets/Camisetas_Color/Camisetas_Chica/Definitivos_3.png'


const Estampados = () => {

  let { id } =  useParams();

  let myProduct = estampados.find(estampado => estampado.id === id);

  const [camiseta, setCamiseta] = useState('blanco');
  const [estamp, setEstamp] = useState(0);
  const [active, setActive] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const imagenes = {
    blanco: blanco,
    negro: negro,
    rojo: roja,
    verde: verde,
    gris: gris,
    gris_clarito: gris_clarito,
  };

  const estamps = [myProduct.foto].concat(myProduct.relacionados)

  const slidesPerView = estamps.length > 2 ? 2.1 : 2;

  function handleSizeChange(size){
    setSelectedSize(size);
  }

  function color(value) {
    setCamiseta(value)
  }


  function addCart() {

    let a = JSON.parse(localStorage.getItem('myProduct')) || [];
    
    const nuevoProducto = {
      ...myProduct,
      foto_camiseta: imagenes[camiseta],
      talla: selectedSize,
    };

    a.push(nuevoProducto);
    
    console.log(a)

    localStorage.setItem('myProduct', JSON.stringify(a));

    window.location.href = '/compra';

  }

  return (
    <section id='section_estamp'>
      <div className='pruebas_s'>
        <div className='estados'>
          <div className='foto_cami'>
            <img className='foto_fondo' src={fondo} alt='fondo_madera'/>
            <img className='foto_camisetas_color' src={imagenes[camiseta]}  alt='s'/>
            <img className="foto_estampado" src={estamps[estamp]} alt='s'/>
          </div>
          <div className='colores_estamp'>
            <div onClick={()=> color('blanco')} className={camiseta === 'blanco' ? 'blanco activo_custom' : 'blanco'}></div>
            <div onClick={()=> color('negro')} className={camiseta === 'negro' ? 'negro activo_custom' : 'negro'}></div>
            <div onClick={()=> color('rojo')} className={camiseta === 'rojo' ? 'rojo activo_custom' : 'rojo'}></div>
            <div onClick={()=> color('verde')} className={camiseta === 'verde' ? 'verde activo_custom' : 'verde'}></div>
            <div onClick={()=> color('gris')} className={camiseta === 'gris' ? 'gris activo_custom' : 'gris'}></div>
            <div onClick={()=> color('gris_clarito')} className={camiseta === 'gris_clarito' ? 'gris_clarito activo_custom' : 'gris_clarito'}></div>
          </div>
        </div>
        <div className='product_details_descripcion mod'>
          <h1>{myProduct.titulo}</h1>
          { (myProduct.relacionados  && myProduct.relacionados.length>0) ?
          (<div className='swiper_my'>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="swiper"
            slidesPerView={slidesPerView}
            spaceBetween={10}
            breakpoints={{
            }}>
            {estamps.map((product,index) => (
            <SwiperSlide 
            key={index}
            onClick={()=>setEstamp(index)}>
                <img onClick={()=>setActive(index)} className={index===active ? "active" : ""} src={product}/>
            </SwiperSlide>
            ))}
            </Swiper>
        </div>
              ):null}
            <p>{myProduct.descripcion}</p>
            <div className='carrito_talla'>
            <Dropdown onSizeChange={handleSizeChange} selectedSize={selectedSize}/>
            <div className='details_button'>
                <Boton_2 onClick={()=>addCart()} className='boton_carrito_details estampados' texto_boton="Añadir al Carrito"/>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Estampados