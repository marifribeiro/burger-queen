import React, { useState } from 'react';
import './styles.css';

import Button from '../Button/index';

function Burger(props) {

  const [obj, setObj] = useState({id: props.id, name: props.name, price: props.price, amount: props.amount, type: 'burger', burger: 'Bovino', extra: 'Não'});

  const burgerTypes = ['Bovino', 'Frango', 'Veggie'];
  const extraTypes = ['Ovo', 'Queijo', 'Não'];

  function selectBurger(value) {
    setObj({...obj, burger: value})
    props.handleBurger({...obj, burger: value})
  }

  function selectExtra(value) {
    if (value !== 'Não' && props.id === 'MxF3ITOa2v8vMkUIM5DE') {
      var newPrice = 16;
    } else if (value !== 'Não' && props.id === '0KVoxhQe8Whkn6ErATew') {
      var newPrice = 11;
    } else if (value === 'Não' && props.id === 'MxF3ITOa2v8vMkUIM5DE') {
      var newPrice = 15;
    } else if ((value === 'Não' && props.id === '0KVoxhQe8Whkn6ErATew')) {
      var newPrice = 10;
    }
    setObj({...obj, extra: value, price: newPrice})
    props.handleExtra({...obj, extra: value, price: newPrice})
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
        { burgerTypes.map((type) => <Button key={type} label={type} onClick={()   => selectBurger(type)} selected={type === obj.burger} />) }
        { extraTypes.map(type => <Button key={type} label={type} onClick={() => selectExtra(type)} selected={type === obj.extra} />) }
      </div>
    </div>
  )
}

export default Burger;