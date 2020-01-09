import React, { useEffect } from 'react';
import './styles.css';

import OrderItem from '../OrderItem/index';
import Burger from '../Burger/index';
import Form from '../Form/index';

function Order(props) {

  return (
    <div>
      <h2 className="order-title">Pedido</h2>
      <div className="order-container">
        {
          props.item.map((item) => {
            if(item.type === 'regular') {
              return (
                <OrderItem 
                  name={item.name} 
                  price={item.price} 
                  key={`order${item.id}`}
                  amount={item.amount}
                  handleRemove={() => props.handleRemove(item)}
                  handleAdd={() => props.handleAdd(item, 'add')}
                  handleMinus={() => props.handleMinus(item, 'minus')}
                />
              )
            } else {
              return (
                <Burger 
                  name={item.name} 
                  price={item.price} 
                  id={item.id}
                  key={`order${item.id}`}
                  amount={item.amount}
                  handleRemove={() => props.handleRemove(item)}
                  handleAdd={() => props.handleAdd(item, 'add')}
                  handleMinus={() => props.handleMinus(item, 'minus')}
                  handleBurger={props.handleBurger}
                  handleExtra={props.handleExtra}
                />
              )
            }
          })
        }
      </div>
      <div className="order-bottom">
        <span className="order-total order-text">Total: R${props.item.reduce((acc, curr) => acc + (curr.price * curr.amount), 0) + ",00"}</span>
        <Form 
          onChangeTable={event => props.handleTable(event.target.value)}
          onChangeName={event => props.handleName(event.target.value)}
        />
        <button className="order-send order-text" onClick={props.send}>Enviar pedido</button>
      </div>
    </div>
  )
}

export default Order;