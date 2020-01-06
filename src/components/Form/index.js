import React from 'react';
import './styles.css';
import Input from '../Input';

function Form(props) {
 return (
  <form className='form'>
    <Input 
      class='input table'
      id='table'
      label='Mesas:'
      type='number'
      onChange={props.onChangeTable}
    />
    <Input 
      class='input name'
      id='name'
      label='Nome:'
      type='text'
      onChange={props.onChangeName}
    />
  </form>
 )
}

export default Form;