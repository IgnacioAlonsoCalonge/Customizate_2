import React, { useState} from 'react'
import blanco from '../../Assets/Camisetas_Color/Camiseta_blanca_2.png'
import negro from '../../Assets/Camisetas_Color/Camiseta_Negra.png'
import roja from '../../Assets/Camisetas_Color/Camiseta_Roja.png'
import verde from '../../Assets/Camisetas_Color/Camiseta_Verde_Oscuro.png'
import gris from '../../Assets/Camisetas_Color/Camiseta_Gris.png'
import gris_clarito from '../../Assets/Camisetas_Color/Camiseta_Gris_Clarito.png'
import 'swiper/css';
import "swiper/css/free-mode";
import Boton_2 from '../Botones/Boton_2'
import Dropdown from '../Botones/Dropdown'
import fondo from '../../Assets/Camisetas_Color/Camisetas_Chica/Definitivos_3.png'
import Api from './api.jsx';
import './Custom.css'



const Custom = () => {

  const [camiseta, setCamiseta] = useState('blanco');
  const [input, setInput] = useState('')
  const [imageUrl,setImageUrl] = useState(null)
  const [selectedSize, setSelectedSize] = useState('');

  const imagenes = {
    blanco: blanco,
    negro: negro,
    rojo: roja,
    verde: verde,
    gris: gris,
    gris_clarito: gris_clarito,
  };


  function handleSizeChange(size){
    setSelectedSize(size);
  }

  function color(value) {
    setCamiseta(value)
  }

  function handleInputChange(event){
    setInput(event.target.value)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };


  function addCart() {
    let a = JSON.parse(localStorage.getItem('myProduct')) || [];
    const nuevoProducto = {
      foto_camiseta: imagenes[camiseta],
      talla: selectedSize,
    };

    a.push(nuevoProducto);
    
    console.log(a)

    localStorage.setItem('myProduct', JSON.stringify(a));

    window.location.href = '/compra';
  }

  async function generateImageRequest(prompt) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Api}`,
          },
          body: JSON.stringify({ inputs: prompt }), // Usar 'prompt' como entrada
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      // Leer la respuesta como un blob
      const blob = await response.blob();

      // Crear una URL para el blob
      const imageUrl = URL.createObjectURL(blob);

      // Actualizar el estado con la URL de la imagen
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function onSubmit(e){
    e.preventDefault();
    generateImageRequest(input);
  }

  return (
    <section id='section_estamp'>
      <div className='pruebas_s'>
        <div className='estados'>
          <div className='foto_cami'>
            <img className='foto_fondo' src={fondo} alt='fondo_madera'/>
            <img className='foto_camisetas_color' src={imagenes[camiseta]}  alt='s'/>
            {imageUrl && <img className="foto_estampado_custom" src={imageUrl} alt="Generated Image" />}
          </div>
          <div className='colores_estamp'>
            <div onClick={()=> color('blanco')} className={camiseta === 'blanco' ? 'blanco activo_custom' : 'blanco'}></div>
            <div onClick={()=> color('negro')} className={camiseta === 'negro' ? 'negro activo_custom' : 'negro'}></div>
            <div onClick={()=> color('rojo')} className={camiseta === 'rojo' ? 'rojo activo_custom' : 'rojo'}></div>
            <div onClick={()=> color('verde')} className={camiseta === 'verde' ? 'verde activo_custom' : 'verde'}></div>
            <div onClick={()=> color('gris')} className={camiseta === 'gris' ? 'gris activo_custom' : 'gris'}></div>
            <div onClick={()=> color('gris_clarito')} className={camiseta === 'gris_clarito' ? 'gris_clarito activo_custom' : 'gris_clarito'}></div>
          </div>
        </div>
        <div className='product_details_descripcion mod'>
          <h1>Hola Hola</h1>
          <h2>hola hola</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <textarea className="text_area" value={input} onChange={handleInputChange} />
            <div className='carrito_talla'>
            <Dropdown onSizeChange={handleSizeChange} selectedSize={selectedSize}/>
            <div className='details_button'>
                <Boton_2 onClick={()=>addCart()} className='boton_carrito_details estampados' texto_boton="Añadir al Carrito"/>
            </div>
            </div>
            <button onClick={onSubmit}>Generar</button>
        </div>
      </div>
    </section>
  )
}

export default Custom