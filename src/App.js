import Custom from './Componentes/Custom/Custom';
import NavBar from './Componentes/NavBar/NavBar';
import Productos from './Componentes/Productos/Productos';
import Home from './Componentes/Home/Home';
import Categorias from './Componentes/Categorias/Categorias';
import ProductDetails from './Componentes/ProductDetails/ProductDetails';
import {Route, Routes} from "react-router-dom";
import Footer from './Componentes/Footer/Footer';
import fotoHome from './Assets1/Ropa_1.png'
import { useEffect } from 'react';
import Compra from './Componentes/Compra/Compra';
import Estampados from './Componentes/Estampados/Estampados';
import Categorias_2 from './Componentes/Categorias_2/Categorias_2';
import Categorias_3 from './Componentes/Categorias_3/Categorias_3';

function App() {

  const images = [fotoHome]

  const preloadImages = (urls) => {
    const promises = [];
    urls.forEach((url) => {
      promises.push(
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
        })
      );
    });
    return Promise.all(promises);
  };

  useEffect(() => {
    preloadImages(images).then(() => {
      console.log('Imágenes precargadas');
    });
  }, []);


  return (
    <div>
      <NavBar/>
      <div className='contenedor'>
        <Routes>
          <Route path='/' element={<Home imagen={fotoHome}/>}/>
          <Route path='/productos' element={<Productos/>}/>  
          <Route path='/productos/:id' element={<ProductDetails/>} />
          <Route path='/estampados/:id' element={<Estampados/>} />
          <Route path='/custom' element={<Custom/>}/>
          <Route path='/categorias' element={<Categorias/>}/>
          <Route path='/compra' element={<Compra/>}/>
          <Route path='/categoria/animales' element={<Categorias_2/>}/>
          <Route path='/categoria/paisajes' element={<Categorias_3/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
