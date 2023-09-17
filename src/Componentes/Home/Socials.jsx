import React from 'react'
import './Socials.css'
import {motion} from 'framer-motion'

import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Socials = () => {

  const inicial={
    visibles: {
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        duration: 2
      }
    },

    oculto: {
      opacity:-1,
      y:50,
    }
  }

  return (
        <motion.div
        variants={inicial}
        initial="oculto"
        whileInView="visibles"
        className='socials'>
            <a href='' target="_blank" className='twitter'><BsTwitter/></a>
            <a href='https://www.instagram.com/' target="_blank" className='instagram'><FiInstagram/></a>
            <a href='https://www.facebook.com/' target="_blank" className='facebook'><FaFacebookF/></a>
        </motion.div>
  )
}

export default Socials