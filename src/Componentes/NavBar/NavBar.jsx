import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

import {FiShoppingCart} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import { useState } from 'react'

const NavBar = () => {

    const [active, setActive] = useState(false);
  
    function dropd(){
      setActive(!active);
      console.log(active)
    }


  return (
    <div className='navigation_bar'>

            <h1 className={ active ? 'logo active' : 'logo'}>Logo</h1>


        <div className='navigation_pestanas'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/productos'>Productos</Link>
                </li>
                <li>
                    <Link to='/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link to='/custom'>Custom</Link>
                </li>
            </ul>
        </div>
 
        <div className='navigation_responsive' onClick={dropd}>
            <div className={ active ? 'navigation_menu active' : 'navigation_menu'} ></div>
        </div>

        <div className={ active ? 'menu_responsive active' : 'menu_responsive'}>

            {active && 
            
           <div className='menu_responsive_'>
                <ul>
                    <li onClick={dropd}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={dropd}>
                        <Link to='/productos'>Productos</Link>
                    </li>
                    <li onClick={dropd}>
                        <Link to='/categorias'>Categorias</Link>
                    </li>
                    <li onClick={dropd}>
                        <Link to='/custom'>Custom</Link>
                    </li>
                </ul>
           </div>
        }
        </div>

        <div className='navigation_tools'>
            <Link to='/compra'><FiShoppingCart className='navigation_carrito_icon'></FiShoppingCart></Link>
            <Link to='/login'><FaUser></FaUser></Link>
        </div>

    </div>
  )
}

export default NavBar