import React from 'react'
import './Productos.css'
import Selector from '../Categorias_selector/Selector'
import {estampados} from '../../estampados'
import { Link } from 'react-router-dom'
import Filtros from './Filtros';

const Productos = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id='prod'>
      <div className='entero'>
      <div className='categories'>
        <h1>Categorias</h1>
      </div>
      <Selector/>
      </div>
      <Filtros/>
      <section id='section_diseños'>  
      <div className='disenos'>
        {estampados.map((estampado,i) => (
          <div
          onClick={()=> handleClick()}
          className={'sis-'+ i}>
          <Link to={`/estampados/${estampado.id}`}>
              <img
              key={i}
              src={estampado.foto} 
              alt='s'/>
          </Link>
          </div>
        ))}
      </div>
      </section>
    </section>
  )
}

export default Productos