import React, { useEffect, useState } from 'react'
import './Compra.css'
import Tarjetas from './Tarjetas'
import Boton_2 from '../Botones/Boton_2';

const Compra = () => {

  const[productos, setProductos] = useState([]);

  useEffect(()=>{
    const pr= localStorage.getItem('myProduct');
    if (pr){
      const productos = JSON.parse(pr);
      setProductos(productos);
      console.log(pr)
    }
  }, []);

  function deleteProduct(index){
    const productosnuevos = [...productos];
    productosnuevos.splice(index,1);
    setProductos(productosnuevos);
    localStorage.setItem('myProduct', JSON.stringify(productosnuevos))
  }


  const TotalPrice = () =>{
    let totalPrice = 0;
    for (const product of productos){
      totalPrice += product.price;
    }
    return totalPrice;
  };

  const IVATotalPrice = () =>{
    const a = TotalPrice() * 21/100;
    return a;
  };

  return (
    <section id='compra'>
        <div className='contenedor_carrito_compra'>
          <div className='compra_descripcion'>
              <h1>Tus productos</h1>
              { productos &&
              <div className='compras_tarjetas'>
              {productos.map((product,index) => (
                <Tarjetas 
                 key={index}
                 onClick={()=>deleteProduct(index)}
                 imagen={product.foto_camiseta}
                 titulo={product.titulo} 
                 descripcion={product.descripcion} 
                 foto={product.foto}
                 talla={product.talla}
                 precio={product.price} 
                 />))}
              </div>}
            </div>
            <div className='compra_detalles_pago'>
                <h2>Detalles de pago</h2>
                <div className='prueba'>
                  <div className='a_112'>
                  <h3>Producto:</h3>
                  <h4>{TotalPrice()-IVATotalPrice()} €</h4>
                  </div>
                  <div className='a_112'>
                  <h3>IVA incl. : </h3>
                  <h4>{IVATotalPrice()} €</h4>
                  </div>
                  <div className='a_112'>
                  <h3>Subtotal :</h3>
                  <h4>{TotalPrice()} €</h4>
                  </div>
                  <div className='a_112'>
                  <Boton_2 texto_boton={'Precio a pagar: '+TotalPrice()+ '€'}></Boton_2>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Compra