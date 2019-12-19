import React, { useState } from 'react';
import './styles.css';

function OrderItem(props) {
 
  const selectedClass = 'selected-item';
  const deselectedClass = 'order-item'
  const [selected, setSelected] = useState([]);

  function select() {
    props.onClick()
  }

  return(
    <>
      <div className='order-container'>
        <div onClick={select} className='order-item'>
          <span className="order-bold order-text">{props.name}</span>
          <span className="order-bold order-text order-price">R$ {props.price}</span>
        </div>
          <button className='order-button order-add order-text' onClck=''></button>
          <button className='order-button order-minus order-text' onClick=''></button>
          <button className='order-button order-remove order-text' onClick=''></button>
      </div>
    </>
  )
}

export default OrderItem;