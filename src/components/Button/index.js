import React from 'react';
import './styles.css';

function Button(props) {
  return(
    <button className='button' onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;