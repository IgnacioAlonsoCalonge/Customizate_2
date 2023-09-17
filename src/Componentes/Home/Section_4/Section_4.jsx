import React from 'react'
import CamisetaSlider from './CamisetaSlider'
import './Section_4.css'
import SudaderaSlider from './SudaderaSlider'



const Section_4 = () => {
  return (
    <section id="section_4">
        <div className='section_4_title'>
          <h1>Camisetas destacadas</h1>
        </div>
        <div className='section_4_contenedor'>
            <CamisetaSlider/>
        </div>
        <section id='sudaderas'>
        <div className='section_4_title'>
          <h1>Sudaderas destacadas</h1>
        </div>
        <div className='section_4_contenedor'>
            <SudaderaSlider/>
        </div>
        </section>
    </section>
  )
}

export default Section_4