import React from 'react';
import './styles.css';

function MenuItem(props) {
  return(
    <>
    <button onClick={props.onClick} className='menu-item'>
      <span className="menu-name menu-text">{props.name}</span>
      <span className="menu-price menu-text">R$ {props.price}</span>
    </button>
    </>
  )
}

export default MenuItem;