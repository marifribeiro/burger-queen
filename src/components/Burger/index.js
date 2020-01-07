import React, { useState } from 'react';
import './styles.css';

import Button from '../Button/index';

function Burger(props) {

  const [burger, setBurger] = useState('');
  const [extra, setExtra] = useState('');
  const burgerTypes = ['Bovino', 'Frango', 'Veggie'];
  const extraTypes = ['+ Ovo', '+ Queijo'];

  function selectBurger(value) {
    setBurger(value)
    console.log(burger)
  }

  function selectExtra(value) {
    setExtra(value)
    console.log(extra)
  }

  return (
    <div className='burger-container'>
      <div className='item-container'>
        <div className='order-item'>
          <span className="order-text">{props.name}</span>
          <span className="order-text order-price">R$ {props.price}</span>
        </div>
        <div className="order-button order-text order-counter">{props.amount}</div>
        <button className='order-button order-add order-text' onClick={props.handleAdd}></button>
        <button className='order-button order-minus order-text' onClick={props.handleMinus}></button>
        <button className='order-button order-remove order-text' onClick={props.handleRemove}></button>
      </div>
      <div className='item-container'>
        { burgerTypes.map(type => <Button label={type} onClick={() => selectBurger(type)} />) }
        { extraTypes.map(type => <Button label={type} onClick={() => selectExtra(type)} />) }
      </div>
    </div>
  )
}

export default Burger;