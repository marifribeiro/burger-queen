import React, { useState, useEffect }from 'react';
import './styles.css';

function MenuItem(props) {
 
  const selectedClass = 'selected-item';
  const deselectedClass = 'menu-item'
  const [selected, setSelected] = useState(false);

  function getItem() {
    setSelected(!selected);
    props.onClick({name: props.name, price: props.price})
  }

  return(
    <>
    <button onClick={getItem} className={ selected ? selectedClass : deselectedClass }>
      <span className="menu-name menu-text">{props.name}</span>
      <span className="menu-price menu-text">R$ {props.price}</span>
    </button>
    </>
  )
}

export default MenuItem;