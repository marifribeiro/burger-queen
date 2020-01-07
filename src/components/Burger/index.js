import React from 'react';
import './styles.css';

function Burger(props) {
  return (
      <div className='item-container'>
        <div className='order-item'>
          <span className="order-text">{props.name}</span>
          <span className="order-text order-price">R$ {props.price}</span>
          <div class="control" id='control'>
            <label className='radio'>
              <input type='radio' id='beef' value='beef' defaultChecked />
                Carne
            </label>
            <label className='radio'>
              <input type='radio' id='chicken' value='chicken' />
                Frango
            </label>
            <label className='radio'>
              <input type='radio' id='veg' value='veg' />
                Veggie
            </label>
          </div>
        </div>
        <div className="order-button order-text order-counter">{props.amount}</div>
        <button className='order-button order-add order-text' onClick={props.handleAdd}></button>
        <button className='order-button order-minus order-text' onClick={props.handleMinus}></button>
        <button className='order-button order-remove order-text' onClick={props.handleRemove}></button>
      </div>
  )
}

export default Burger;