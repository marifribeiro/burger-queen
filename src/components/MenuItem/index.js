import React, { useState, useEffect }from 'react';
import './styles.css';
import firebase from '../../firebase';



function Counter() {
  const num = 0
  const [count, setCount] = useState(num);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(num)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

function MenuItem(props) {
  const selected = 'selected-item';
  const deselected = 'menu-item'
  const [changeClass, setChangeClass] = useState(deselected);

  return(
    <>
    <Counter />
    <div onClick={() => setChangeClass(selected)} className={changeClass}>
      <span className="menu-name menu-text">{props.name}</span>
      <span className="menu-price menu-text">R$ {props.price}</span>
    </div>
    </>
  )
}

export default MenuItem;