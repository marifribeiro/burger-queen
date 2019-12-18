import React, { useState }from 'react';
import './styles.css';

function MenuItem(props) {
 
  const selectedClass = 'selected-item';
  const deselectedClass = 'menu-item'
  const [selected, setSelected] = useState(false);

  function select() {
    setSelected(!selected);
    props.onClick()
  }

  return(
    <>
    <button onClick={select} className={ selected ? selectedClass : deselectedClass }>
      <span className="menu-name menu-text">{props.name}</span>
      <span className="menu-price menu-text">R$ {props.price}</span>
    </button>
    </>
  )
}

export default MenuItem;