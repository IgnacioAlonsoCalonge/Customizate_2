import React from 'react'
import './Boton_2.css'

const Boton_2 = (props) => {
  return (
    <div className='section_boton'>
        <a onClick={props.onClick} href={props.path}><span>{props.texto_boton}</span></a>        
    </div>
  )
}

export default Boton_2