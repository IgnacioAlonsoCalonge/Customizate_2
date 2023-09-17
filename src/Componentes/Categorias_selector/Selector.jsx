import React from 'react'
import foto from '../../Assets/Categorias/Paisaje.png'
import foto1 from '../../Assets/Categorias/Orca.png'
import foto2 from '../../Assets/Categorias/Itachi.png'
import foto3 from '../../Assets/Categorias/Arboles.png'
import foto4 from '../../Assets/Categorias/Afro_5.png'
import { useState, useEffect } from 'react'
import './Selector.css'
import { Link } from 'react-router-dom'

const Selector = () => {
    
  const [active, setActive] = useState(0);
  const [animando, setAnimando] = useState(true);

  const images =  [
    foto,
    foto1,
    foto2,
    foto3,
    foto4,
  ];

  useEffect(() =>{
    const intervalId = setInterval(() =>
      {
        setActive(active => (active +1)%images.length)
      },3000);
      return () => clearInterval(intervalId);
  } , [images.length]);

  return (
    <section id='productoss'
    onMouseEnter={()=> setAnimando(false)}
    onMouseLeave={()=> setAnimando(true)}>
      
    <Link to='/categoria/japon' className={active === 0 && animando ? "categoria hovering": "categoria"}>
      <img src={foto3} alt='foto1'/>
      <div className={active === 0 && animando ? "categoria-hover1 s3" : "categoria-hover s3"}><h1>のとのできない</h1></div>
    </Link>

    <Link to='/categoria/paisajes' className={active === 1 && animando ? "categoria hovering": "categoria"}>
      <img src={foto} alt='foto1'/>
      <div className={active === 1 && animando ? "categoria-hover1 s0" : "categoria-hover s0"}><h1>Paisajes</h1></div>
    </Link>

    <Link to='/categoria/animales' className={active === 2 && animando ?  "categoria hovering": "categoria"}>
      <img src={foto1} alt='foto1'/>
      <div class={active === 2 && animando ? "categoria-hover1 s1" : "categoria-hover s1"}><h1>Animales</h1></div>
    </Link>

    <Link to='/categoria/anime' className={active === 3 && animando ? "categoria hovering": "categoria"}>
      <img src={foto2} alt='foto1'/>
      <div class={active === 3 && animando ? "categoria-hover1 s2" : "categoria-hover s2"}><h1>Anime</h1></div>
    </Link>

    <Link to='/categoria/retratos' className={active === 4 && animando ? "categoria hovering": "categoria"}>
      <img src={foto4} alt='foto1'/>
      <div class={active === 4 && animando ? "categoria-hover1 s5" : "categoria-hover s5"}><h1>Retratos</h1></div>
    </Link>

  </section>
  )
}

export default Selector