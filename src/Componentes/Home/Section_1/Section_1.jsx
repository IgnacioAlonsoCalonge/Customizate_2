import React from 'react'
import Socials from '../Socials'
import './Section_1.css'
import {motion} from 'framer-motion'

const Section_1 = (props) => {

  return (
    <div className='contenedor_home'>
        <div
        className='home_introduccion'>
          <h1>Therapy</h1>
          <div className='home_introduccion_2'>
            <h2>Crea tu propio</h2>
              <section className='animacion'>
                <div className='first'>
                  <div>
                    Estilo
                  </div>
                </div>
                <div className='second'>
                  <div>
                    Look
                  </div>
                </div>
                <div className='third'>
                  <div>
                    Camino
                  </div>
                </div>
              </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure corporis adipisci necessitatibus voluptate. Repudiandae consequuntur exercitationem architecto sapiente sequi
            doloremque commodi suscipit sit odit officia sint quae,
              consectetur distinctio.</p>
              <Socials/>
        </div>
        <div 
        className='home_foto'>
          <img src={props.imagen} alt='foto_home'/>
        </div>
      </div>
  )
}

export default Section_1