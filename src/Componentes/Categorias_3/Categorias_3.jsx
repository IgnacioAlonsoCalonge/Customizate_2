import React from 'react'
import './Categorias_3.css'
import foto1 from '../../Assets/Parallax_1/Arco_P.png'
import foto2 from '../../Assets/Parallax_1/Arco_P_2.png'
import foto3 from '../../Assets/Parallax_1/Arco_sf.png'
//import foto4 from '../../Assets/Parallax/M_5.png'
//import foto5 from '../../Assets/Parallax/M_6.png'
//import foto6 from '../../Assets/Parallax/M_7.png'
//import foto8 from '../../Assets/Parallax/M_8.png'
import { useEffect } from 'react'



const Categorias_3 = () => {

    useEffect(() => {
      let scene = document.querySelector('.recuadro_foto_1');
      let x = 0;
      let y = 0;
  
      const handleMouseMove = (e) => {
        x = e.clientX - scene.clientWidth;
        y = e.clientY - scene.clientHeight;
  
        const parallax_element = document.querySelectorAll(".parallax");
        parallax_element.forEach((el) => {
          let speedx = el.dataset.speedx;
          let speedy = el.dataset.speedy;
          el.style.transform = `translateX(calc( ${-x * speedx}px)) translateY(calc(${y*speedy}px))`;
        });
      };
  
      const debouncedMouseMove = debounce(handleMouseMove, 10); // 16ms ~ 60 FPS
  
      scene.addEventListener("mousemove", debouncedMouseMove);
  
      return () => {
        scene.removeEventListener("mousemove", debouncedMouseMove);
      };
    }, []);
  
    return (
      <div className='prlx'>
        <div className='recuadro_foto_1'>
        <img className='parallax f1' data-speedx="0.08" data-speedy="0.05" src={foto1} alt='s' />
        </div>
        <div className='recuadro_foto'>
          <img className='parallax f2' data-speedx="0.12" data-speedy="0.06" src={foto2} alt='s' />
          <h1 className='parallax' data-speedx="0.2" data-speedy="0.2">SELECTION</h1>
          <img className='parallax f3' data-speedx="0.15" data-speedy="0.08" src={foto3} alt='s' />
        </div>
      </div>
    );
  };
  
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
  

export default Categorias_3