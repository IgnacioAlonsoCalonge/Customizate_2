import React from 'react'
import sudadera from '../../../Assets1/Sudadera.png'
import camiseta from '../../../Assets1/Camiseta.png'
import './Section_2.css'
import Tarjetas from './Tarjetas'
import {motion} from 'framer-motion'

const Section_2 = () => {

  const inicial={
    visibles: {
      opacity:1,
      transition:{
        type:"spring",
        duration: 1
      }
    },

    oculto1: {
      opacity:1,
    },

    oculto2: {
      opacity:1,
    }
  }

  return (
    <section>
        <div className='contenedor_s2'>
            <h1>Nuestros productos</h1>
            <div className="contenedor_tarjetas">
              <motion.div
              variants={inicial}
              initial="oculto1"
              whileInView="visibles">
                <div>
                <Tarjetas imagen={camiseta} alts="camiseta"/>
                </div>
              </motion.div>
              <motion.div
              variants={inicial}
              initial="oculto2"
              whileInView="visibles">
                <div className='sud_1'>
                <Tarjetas imagen={sudadera} alts="sudadera"/>
                </div>
              </motion.div>
            </div>
        </div>
    </section>  
  )
}

export default Section_2