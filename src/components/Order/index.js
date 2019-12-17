import React, { useState, useEffect }from 'react';
import './styles.css';
import firebase from '../../firebase';

function Order(props) {
    return(
        <div>
            <h2 className="order-title">Pedido</h2>
            {
                props.item.map((item) => {
                return (
                    <span className="order-item">{item.name} {item.price}</span>
                )
                })
            }
            <div className="order-bottom">
                <span className="order-total order-text">Total: R${props.total}</span>
                <button className="order-send order-text" onClick={props.send}>Enviar pedido</button>
            </div>
        </div>
    )
}

export default Order;