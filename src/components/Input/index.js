import React from 'react';
import './styles.css';

function Input(props) {
 return (
  <form className='form'>
    <span className='input table'>
      <div id='table-label' className='label input-text'>Mesa:</div>
      <input type='number' id='table' className='input-value input-text' onChange={props.onChange}></input>
    </span>
    <span className='input name'>
      <div id='name-label' className='label input-text'>Nome:</div>
      <input type='text' id='name' className='input-value input-text' onChange={props.onChange}></input>
    </span>
  </form>
 )
}

export default Input;