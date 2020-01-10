import React, { useEffect } from 'react';
import './styles.css'

function KitchenCard(props) {
  return (
    <div className='card'>
      {props.order}
    </div>
  )
}

export default KitchenCard;