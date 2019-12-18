import React, { useState, useEffect } from 'react';
import './styles.css';
import firebase from '../../firebase';
import MenuItem from '../MenuItem';

import MenuItem from '../MenuItem/index';

function Order(props) {
<<<<<<< HEAD
  return (
    <div>
      <h2 className="order-title">Pedido</h2>
      <div className="order-container">
        {
          props.item.map((item) => {
            return (
              <MenuItem name={item.name} price={item.price} onClick='' />
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
=======
    return(
        <div>
            <h2 className="order-title">Pedido</h2>
            <div className="order">
                {
                    props.item.map((item) => {
                        return <MenuItem onClick='' name={item.name} price={item.price} />
                    })
                }
            </div>
            <div className="order-bottom" key={props.id}>
                <span className="order-total order-text">Total: R${props.total}</span>
                <button className="order-send order-text" onClick={props.send}>Enviar pedido</button>
            </div>
        </div>
    )
>>>>>>> e40bd49166fb2b73735d190f5957e8285a59ed75
}

export default Order;