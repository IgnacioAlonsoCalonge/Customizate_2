import React from 'react'
import './Section_5.css'
import chica from '../../../Assets/Chica_1.png'
import chico from '../../../Assets/Ropa_3.png'

const Section_5 = () => {
  return (
    <section id='section_5'>
        <div className='section_4_title'>
          <h1>Filtro por sexo</h1>
        </div>
        <div className='section_5_fotos'>
            <div className='section_5_hombre'>
               <img src={chico} alt='chico'/>
            </div>
            <div className='section_5_mujer'>
                <img src={chica} alt='mujer'/>
            </div>

        </div>
    </section>
  )
}

export default Section_5