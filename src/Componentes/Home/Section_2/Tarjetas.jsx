import React from 'react'
import './Tarjetas.css'

const Tarjetas = (props) => {
  return (
    <div className='tarjetas'>
        <img src={props.imagen} alt={props.alts}/>
    </div>
  )
} 


export default Tarjetas