import React from 'react';
import './styles.css';

import Button from '../Button/index.js'

function KitchenCard(props) {

  if(!props.done) {
    return (
    <div className='card-container card-text'>
      <div className='card-info'>
        <span className='order-time'>{new Date(props.ordered).toLocaleTimeString()}</span>
        <span className='table-info'>Mesa: {props.table}</span>
        <span className='table-info'>Nome: {props.name}</span>
          {
            props.order.map(item => item.type === 'burger' ? (
              <div className='kitchen-order' key={`kitchen${item.id}`}>
                <span className='order-info'>{item.name}</span>
                <span className='order-info'>Quantidade: {item.amount}</span>
                <span className='order-info'>Hambúrger: {item.burger}</span>
                <span className='order-info'>Extras: {item.extra}</span>
              </div>
              ) : (
              <div className='kitchen-order' key={`kitchen${item.id}`}>
                <span className='order-info'>{item.name}</span>
                <span className='order-info'>Quantidade: {item.amount}</span>
              </div>
            ))
          }
      </div>
      <div className='kitchen-button'>
       <Button onClick={props.onClick} label='Pedido pronto' />
      </div>
    </div>
    )
  } else {
    return null;
  }
}

export default KitchenCard;