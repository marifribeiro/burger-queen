import React, { useState } from 'react';
import './styles.css';

function OrderItem(props) {

  const [order, setOrder] = useState([])

  const addItem = (item) => {
    if (!item.amount) {
      const newItem = {...item, amount: 1}
      setOrder([...order, newItem])
      console.log(order)
    } else {
      item.amount++;
      setOrder([...order])
      console.log(order)
    }
    
  }

  return(
    <>
      <div className='order-container'>
        <div className='order-item'>
          <span className="order-bold order-text">{props.name}</span>
          <span className="order-bold order-text order-price">R$ {props.price}</span>
        </div>
          <div className="order-button order-text">{props.amount}</div>
          <button className='order-button order-add order-text' onClick={() => addItem(props)}></button>
          <button className='order-button order-minus order-text' onClick={props.handleMinusClick}></button>
          <button className='order-button order-remove order-text' onClick={props.handleRemoveClick}></button>
      </div>
    </>
  )
}

export default OrderItem;