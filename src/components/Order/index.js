import React, { useState } from 'react';
import './styles.css';

import OrderItem from '../OrderItem/index';

function Order(props) {

  return (
    <div>
      <h2 className="order-title">Pedido</h2>
      <div className="order-container">
        {
          props.item.map((item) => {
            return (
              <OrderItem 
                name={item.name} 
                price={item.price} 
                key={`order${item.id}`}
                handleRemove={() => props.handleRemove(item.id)}
              />
            )
          })
        }
      </div>
      <div className="order-bottom">
        <span className="order-total order-text">Total: R${props.item.reduce((acc, curr) => acc + curr.price, 0) + ",00"}</span>
        <button className="order-send order-text" onClick={props.send}>Enviar pedido</button>
      </div>
    </div>
  )
}

export default Order;