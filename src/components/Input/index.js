import React from 'react';
import './styles.css';

function Input(props) {
 return (
  <form className='form'>
    <span className='input'>
      <div id='table-label' className='label'>Mesa:</div>
      <input type='number' id='table' className='input-value'></input>
    </span>
    <span className='input'>
      <div id='name-label' className='label'>Nome:</div>
      <input type='text' id='name' className='input-value'></input>
    </span>
  </form>
 )
}

export default Input;