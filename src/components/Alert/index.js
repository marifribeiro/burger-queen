import React from 'react';
import './styles.css';

import Button from '../Button';

function Alert(props) {
  return(
      <div className="alert-container">
        <span className="alert-text">{props.message}</span>
        <button onClick={props.onClick} className='alert-button'>x</button>
      </div>
  )
}

export default Alert;