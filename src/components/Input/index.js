import React from 'react';
import './styles.css';

function Input(props) {
 return (
  <span className={props.class}>
    <div id={props.id} className='label input-text'>{props.label}</div>
    <input autoComplete='off' type={props.type} id={props.id} className='input-value input-text' onChange={props.onChange} value={props.value}></input>
  </span>
 )
}

export default Input;