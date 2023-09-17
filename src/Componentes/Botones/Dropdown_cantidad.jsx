import React from 'react'
import { useState } from 'react';
import './Dropdown_cantidad.css'


const Dropdown_cantidad = (props) => {

    
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);


  function dropd(){
    setActive(!active);
  }

  function selectOption(value){
    setSelectedValue(value);
    props.handleCantidad(value);
    setActive(false);
  }


  return (
    <div className={active ? 'dropdown_1 active' : 'dropdown_1'}>
        <input 
          type="number"
          className='texto' 
          onClick={dropd} 
          readOnly
          value={selectedValue}
          placeholder={1}
          onChange={(e) => setSelectedValue(Number(e.target.value))}>
        </input>
        <div className='option'>
          <div onClick={() => selectOption(1)}>1</div>
          <div onClick={() => selectOption(2)}>2</div>
          <div onClick={() => selectOption(3)}>3</div>
          <div onClick={() => selectOption(4)}>4</div>
          <div onClick={() => selectOption(5)}>5</div>
          <div onClick={() => selectOption(6)}>6</div>    
        </div>
    </div>
  )
}

export default Dropdown_cantidad