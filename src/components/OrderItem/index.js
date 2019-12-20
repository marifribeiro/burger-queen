import React, { useState } from 'react';
import './styles.css';

function OrderItem(props) {

  const [order, setOrder] = useState([]);
  let [amount, setAmount]= useState(1);

  function addItem() {
    const count = amount + 1;
    setAmount(count);
    return count;
  }

  function minusItem () {
    if (amount >= 2) {
      const count = amount - 1;
      setAmount(count);
      return count;
    } else {
      const count = 1;
      setAmount(count);
      return count;
    }
  }

  return(
    <>
      <div className='order-container'>
        <div className='order-item'>
          <span className="order-text">{props.name}</span>
          <span className="order-text order-price">R$ {props.price}</span>
        </div>
          <div className="order-button order-text order-counter">{amount}</div>
          <button className='order-button order-add order-text' onClick={addItem}></button>
          <button className='order-button order-minus order-text' onClick={minusItem}></button>
          <button className='order-button order-remove order-text' onClick={props.handleRemove}></button>
      </div>
    </>
  )
}

export default OrderItem;