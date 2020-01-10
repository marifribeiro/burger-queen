import React from 'react';
import './styles.css'

function KitchenCard(props) {
  return (
    <div className='card-container'>
      <span className='table-info'>Nome: {props.name}</span>
      <span className='table-info'>Mesa: {props.table}</span>
        {
          props.order.map(item => item.type === 'burger' ? (
            <div className='kitchen-order'>
              <span className='order-info'>Item: {item.name}</span>
              <span className='order-info'>Quantidade: {item.amount}</span>
              <span className='order-info'>Hamburger: {item.burger}</span>
              <span className='order-info'>Extras: {item.extra}</span>
            </div>
            ) : (
            <div className='kitchen-order'>
              <span className='order-info'>Item: {item.name}</span>
              <span className='order-info'>Quantidade: {item.amount}</span>
            </div>
          ))
        }
      </div>
  )
}

export default KitchenCard;