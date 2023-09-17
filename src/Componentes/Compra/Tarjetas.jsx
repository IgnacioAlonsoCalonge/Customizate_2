import React from 'react'
import './Tarjetas.css'
import Dropdown_cantidad from '../Botones/Dropdown_cantidad'
import { useState } from 'react'

const Tarjetas = (props) => {

  const [precio, setPrecio] = useState(props.precio);

  function handleCantidad(value){
    setPrecio(props.precio*value)
  }


  return (
    <div className='section_tarjeta'>

        <img src={props.imagen} alt='fto'/>
        <img src={props.foto} alt='fto'/>

        <div className='tarjetas_descripcion'>
            <div onClick={props.onClick} className='cerrar'></div>
            <div className='tarjetas_title_cruz'>
              <h2>{props.titulo}</h2>
            </div>
            <div className='tarjetas_talla_tipo'>
              <p>{props.tipo}</p>
              <p>Talla: {props.talla}</p>
            </div>
            <div className='cantidad_precio'>
                <Dropdown_cantidad 
                handleCantidad={handleCantidad}
                setPrecio={setPrecio}
                precio={props.precio}
                 />
                <h4>{precio}<span>€</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Tarjetas