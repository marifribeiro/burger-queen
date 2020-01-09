import React from 'react';
import './styles.css';

function Button(props) {

  const selectedClass = 'order-button order-text selected';
  const deselectedClass = 'order-button order-text burger';

   return (
    <button onClick={props.onClick} className={props.selected ? selectedClass : deselectedClass}>{props.label}</button>
   )
}

export default Button;