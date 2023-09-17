import React from 'react'
import './Tarjetas.css'
import blanco from '../../Assets/Camisetas_Color/Camiseta_blanca_2.png'
import negro from '../../Assets/Camisetas_Color/Camiseta_Negra.png'
import roja from '../../Assets/Camisetas_Color/Camiseta_Roja.png'
import verde from '../../Assets/Camisetas_Color/Camiseta_Verde_Oscuro.png'
import gris from '../../Assets/Camisetas_Color/Camiseta_Gris.png'
import gris_clarito from '../../Assets/Camisetas_Color/Camiseta_Gris_Clarito_2.png'
import bicolor from '../../Assets/Camisetas_Color/Camiseta_bicolor.png'

import m_blanco from '../../Assets/Camisetas_Color/Camisetas_Chica/Camiseta_Mujer_Blanca.png'
import m_negro from '../../Assets/Camisetas_Color/Camisetas_Chica/Camiseta_Mujer_Negra.png'
import m_roja from '../../Assets/Camisetas_Color/Camisetas_Chica/Camiseta_Mujer_Roja.png'
import m_verde from '../../Assets/Camisetas_Color/Camisetas_Chica/Camiseta_Mujer_Verde.png'
import m_gris from '../../Assets/Camisetas_Color/Camisetas_Chica/Camiseta_Mujer_Naranja.png'
import m_gris_clarito from '../../Assets/Camisetas_Color/Camisetas_Chica/Camiseta_Mujer_Gris.png'
import camis from '../../Assets/Camisetas_Color/Camisetas_Chica/Definitivos_3.png'

import s_blanco from '../../Assets/Camisetas_Color/Sudaderas/Sudadera_Blanca.png'
import s_negro from '../../Assets/Camisetas_Color/Sudaderas/Sudadera_Negra.png'
import s_roja from '../../Assets/Camisetas_Color/Sudaderas/Sudadera_Roja.png'
import s_verde from '../../Assets/Camisetas_Color/Sudaderas/Sudadera_Azul.png'
import s_gris from '../../Assets/Camisetas_Color/Sudaderas/Sudadera_Naranja.png'


import sm_blanco from '../../Assets/Camisetas_Color/Sudaderas_Chica/Sudadera_Mujer_Blanca.png'
import sm_negro from '../../Assets/Camisetas_Color/Sudaderas_Chica/Sudadera_Mujer_Negra.png'
import sm_roja from '../../Assets/Camisetas_Color/Sudaderas_Chica/Sudadera_Mujer_Roja.png'
import sm_azul from '../../Assets/Camisetas_Color/Sudaderas_Chica/Sudadera_Mujer_Azul.png'
import sm_azul_c from '../../Assets/Camisetas_Color/Sudaderas_Chica/Sudadera_Mujer_Azul_Clarito.png'




import { useState } from 'react'
import {Link} from 'react-router-dom'
import {TbArrowsExchange2} from 'react-icons/tb'
import {GiHoodie} from 'react-icons/gi'
import {FaTshirt} from 'react-icons/fa'


const Tarjetas = (props) => {

    const [camiseta, setCamiseta] = useState('blanco');
    const [genero, setGenero] = useState(true);
    const [product, setProduct] = useState(true);

    const imagenes = {
        blanco: blanco,
        negro: negro,
        rojo: roja,
        verde: verde,
        gris: gris,
        gris_clarito: gris_clarito,
        bicolor: bicolor
      };

      const imagenes_2 = {
        blanco: m_blanco,
        negro: m_negro,
        rojo: m_roja,
        verde: m_verde,
        gris: m_gris,
        gris_clarito: m_gris_clarito,
      };

      const imagenes_3  ={
        blanco: s_blanco,
        negro: s_negro,
        rojo: s_roja,
        verde: s_verde,
        gris: s_gris,
      }

      const imagenes_4 ={
        blanco: sm_blanco,
        negro: sm_negro,
        rojo: sm_roja,
        verde: sm_azul,
        gris: sm_azul_c,
      }



    function color(value) {
      setCamiseta(value)
      }


      function changeGenero(){
        setGenero(!genero)
      }

      function changeProduct(){
        setProduct(!product)
      }

    return (
      <div className='section_cat_tarjetas'>
        <TbArrowsExchange2 className='my_icon' onClick={() => changeGenero()}/>
        { product &&
        <GiHoodie className='my_icon_2' onClick={() => changeProduct()}/>
        }

        {
          product === false &&
          <FaTshirt className='my_icon_2' onClick={() => changeProduct()}/>
        }

           <div className='section_cat_capa'>
           <Link to={`/estampados/${props.st}`} onClick={props.onClick}>
              <div className='section_cat_fotos'>

                <img className='foto_camis' src={camis}/>
                  { product && genero && 
                    <div>
                      <img className='foto_camis_2' src={imagenes[camiseta]} alt={props.titulo}/>
                      <img className={`foto_estampado1 ${camiseta === 'blanco' ? 'blend_multiply' : camiseta=== 'bicolor' ? 'blend_bicolor' : 'blend_normal'}`} src={props.imagen} alt={props.titulo}/>
                    </div>
                  }

                  { product && genero === false &&
                    <div>
                      <img className='foto_camis_2' src={imagenes_2[camiseta]} alt={props.titulo}/>
                      <img className={`foto_estampado2 ${camiseta === 'blanco' ? 'blend_multiply' : camiseta=== 'bicolor' ? 'blend_bicolor' : 'blend_normal'}`} src={props.imagen} alt={props.titulo}/>
                    </div>
                  }

                  
                  { product=== false && genero &&
                    <div>
                      <img className='foto_camis_2' src={imagenes_3[camiseta]} alt={props.titulo}/>
                      <img className={`foto_estampado4 ${camiseta === 'blanco' ? 'blend_multiply' : camiseta=== 'bicolor' ? 'blend_bicolor' : 'blend_normal'}`} src={props.imagen} alt={props.titulo}/>
                    </div>
                  }

                  { product=== false && genero === false &&
                    <div>
                      <img className='foto_camis_2' src={imagenes_4[camiseta]} alt={props.titulo}/>
                      <img className={`foto_estampado3 ${camiseta === 'blanco' ? 'blend_multiply' : camiseta=== 'bicolor' ? 'blend_bicolor' : 'blend_normal'}`} src={props.imagen} alt={props.titulo}/>
                    </div>
                  }
                
              </div>
             
              </Link>
              <div className='section_cat_descripcion'>
                  <div className='section_cat_titulo'>
                      <h1>{props.titulo}</h1>
                      <h1>{props.precio}<span>€</span></h1>
                  </div>
                  <div className='colores_estamp1'>
                    <div onClick={()=> color('blanco')} className={camiseta === 'blanco' ? 'blanco activo_custom' : 'blanco'}></div>
                    <div onClick={()=> color('negro')} className={camiseta === 'negro' ? 'negro activo_custom' : 'negro'}></div>
                    <div onClick={()=> color('rojo')} className={camiseta === 'rojo' ? 'rojo activo_custom' : 'rojo'}></div>
                    <div onClick={()=> color('verde')} className={camiseta === 'verde' ? 'verde activo_custom' : 'verde'}></div>
                    <div onClick={()=> color('gris')} className={camiseta === 'gris' ? 'gris activo_custom' : 'gris'}></div>
                    <div onClick={()=> color('gris_clarito')} className={camiseta === 'gris_clarito' ? 'gris_clarito activo_custom' : 'gris_clarito'}></div>
                    <div onClick={()=> color('bicolor')} className={camiseta === 'bicolor' ? 'gris_clarito activo_custom' : 'gris_clarito'}></div>
                </div>
              </div>
          </div>
      </div>
    )
  }

export default Tarjetas