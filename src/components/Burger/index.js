import React, { useState } from 'react';
import './styles.css';

import Button from '../Button/index';

function Burger(props) {

  const [obj, setObj] = useState({name: props.name, price: props.price, amount: props.amount, type: 'burger', burger: 'Bovino default', extra: 'none'});
  const burgerTypes = ['Bovino', 'Frango', 'Veggie'];
  const extraTypes = ['+ Ovo', '+ Queijo'];

  function selectBurger(value) {
    setObj({...obj, burger: value})
    props.handleBurger({...obj, burger: value})
  }

  function selectExtra(value) {
    setObj({...obj, extra: value})
    props.handleExtra({...obj, extra: value})
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
        { burgerTypes.map((type) => <Button key={type} label={type} onClick={()   => selectBurger(type)} />) }
        { extraTypes.map(type => <Button key={type} label={type} onClick={() => selectExtra(type)} />) }
      </div>
    </div>
  )
}

export default Burger;