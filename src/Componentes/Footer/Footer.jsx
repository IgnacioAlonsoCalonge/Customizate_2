import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
        <div className='contenedor_footer'>
            <div className='footer_contacto'>
                <h3>Contacto</h3>
                <p> 555-555-555</p>
                <p>prueba@gmail.com</p>
            </div>
            <div className='footer_ayuda'>
                <h3>Ayuda</h3>
                <Link to={'/politica'}>Política</Link>
                <Link to={'/devoluciones'}>Devoluciones</Link>
                <Link to={'/faq'}>FAQ</Link>
                <Link to={'/pago'}>Pago</Link>
            </div>
            <div className='footer_socials'>
                <a href='' target="https://www.twitter.com/"><BsTwitter/></a>
                <a href='https://www.instagram.com/' target="_blank"><FiInstagram/></a>
                <a href='https://www.facebook.com/' target="_blank"><FaFacebookF/></a>
            </div>
        </div>
    </section>
  )
}

export default Footer