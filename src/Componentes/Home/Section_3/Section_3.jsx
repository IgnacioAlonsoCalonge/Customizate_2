import React from 'react'
import gato from '../../../Assets1/Gato.png'
import chica from '../../../Assets1/Chica_gato.png'
import './Section_3.css'
import Boton1 from './Boton1'


const Section_3 = () => {
  return (

    <section id='section_3'>
        
        <div className='section_3_contenedor'>
            
            <div className='section_3_custom'>
                <h1>Customizate</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Totam iu
                </p>
                <Boton1 direccion="/custom" texto_boton="Customizate"/>
            </div>
            <div className='section_3_img1'>
                <img src={chica} alt='chica'/>


            </div>
            <div className='section_3_img2'>
                <img src={gato} alt='gato'/>
            </div>

        </div>

    </section>
  )
}

export default Section_3