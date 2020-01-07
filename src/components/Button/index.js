import React, { useState } from 'react';
import './styles.css';

function Button(props) {

  const [selected, setSelected] = useState(false);
  const selectedClass = 'order-button order-text selected';
  const deselectedClass = 'order-button order-text burger';

    function select() {
     setSelected(!selected);
     props.onClick()
   }
   
   return (
    <button onClick={select} className={selected ? selectedClass : deselectedClass}>{props.label}</button>
   )
}

export default Button;