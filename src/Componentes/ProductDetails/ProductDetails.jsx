import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { products } from '../../products'

import Boton_2 from '../Botones/Boton_2'
import Dropdown from '../Botones/Dropdown'
import CamisetaSlider from '../Home/Section_4/CamisetaSlider'

const ProductDetails = () => {

  let { id } =  useParams()

  let myProduct = products.find(product => product.id === id)

  return (
    <section id='id'>
      <div  className='product_details_entero'>
        <div className='contenedor_product_details'>
          <div className='product_details_foto'>
            <img src={myProduct.foto} alt={myProduct.name}></img>
          </div>
          <div className='product_details_descripcion'>
            <h1>{myProduct.name}</h1>
            <div className='product_details_tipo'>
              <h4>{myProduct.tipo}</h4>
            </div>
            <p>{myProduct.descripcion}</p>
            <div className='product_details_dropdown'>
              <h2>Precio : {myProduct.price}</h2>
              <Dropdown/>
            </div>
            <div className='product_details_precio'>
              <div className='details_button'>
                <Boton_2 className='boton_carrito_details' texto_boton="Añadir al Carrito"/>
              </div>
            </div>
          </div>
        </div>

        <section id='slider'>
          <div className='slider_titulo'>
            <h1>Te puede interesar</h1>
          </div>
          <div>
            <CamisetaSlider/>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProductDetails