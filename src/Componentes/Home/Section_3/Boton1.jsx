import React from 'react'
import './Boton1.css'

const Boton1 = (props) => {
  return (
    <div className='section_3_boton'>
        <a href={props.direccion}><span>{props.texto_boton}</span></a>        
    </div>
  )
}

export default Boton1