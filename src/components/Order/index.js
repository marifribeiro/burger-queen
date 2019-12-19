import React, { useState } from 'react';
import './styles.css';

import OrderItem from '../OrderItem/index';

function Order(props) {

  const [order, setOrder] = useState([]);
   
  const sendOrder = (item) => {
    const orders = [...order, {name: item.name, price: item.price, key: item.key, amount: item.amount}];
    setOrder(orders)
  }
  
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
                /*amount={item.amount}*/
              />
            )
          })
        }
      </div>
      <div className="order-bottom">
        <span className="order-total order-text">Total: R${props.total}</span>
        <button className="order-send order-text" onClick={props.send}>Enviar pedido</button>
      </div>
    </div>
  )
}

export default Order;