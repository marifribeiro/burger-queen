import React, { useState, useEffect } from 'react';
import './styles.css';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import pt from 'date-fns/locale/pt';

import Button from '../Button/index.js'

function KitchenCard(props) {
  const [counter, setCounter] = useState('...');
  const [active, setActive] = useState(true);

  function stopTimer() {
    setActive(false);
    setCounter(0)
    props.onClick();
  }

  useEffect(() => {
    if(!props.done) {
      let interval = null;
      if(active) {
        interval = setInterval(() => {
          setCounter(formatDistanceStrict(new Date(props.ordered), new Date(), {locale: pt}));
        }, 1000)
      }else if (!active && counter !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval)
      //
    }
  }, [active, counter, props.done, props.ordered])

  if(!props.done) {
    return (
    <div className='card-container card-text'>
      <div className='card-info'>
        <span className='order-time'>{counter}</span>
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
       <Button onClick={stopTimer} label='Pedido pronto' />
      </div>
    </div>
    )
  } else {
    return null;
  }
}

export default KitchenCard;