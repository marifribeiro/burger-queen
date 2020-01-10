import React from 'react';
import './styles.css';

function Button(props) {

  const selectedClass = 'extra-button order-text burger selected';
  const deselectedClass = 'extra-button order-text burger';

   return (
    <button onClick={props.onClick} className={props.selected ? selectedClass : deselectedClass}>{props.label}</button>
   )
}

export default Button;