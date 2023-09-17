import React from 'react'
import './Tarjetas.css'


const Tarjetas = (props) => {
  return (
    <div className='section_4_tarjetas'>
         <div className='section_4_capa'>
            <div className='section_4_fotos'>
                <img src={props.imagen} alt={props.titulo}/>
            </div>
            <div className='section_4_descripcion'>
                <div className='section_4_titulo'>
                    <h1>{props.titulo}</h1>
                    <h1>{props.precio}</h1>
                </div>
                <div className='section_4_precio'>
                    <p>{props.descripcion}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tarjetas