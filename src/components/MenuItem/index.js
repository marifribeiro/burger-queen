import React from 'react';
import './styles.css';

function MenuItem(props) {
  return(
    <div className="menu-item">
      <span className="menu-name menu-text">{props.name}</span>
      <span className="menu-price menu-text">R$ {props.price}</span>
    </div>
  )
}

export default MenuItem;