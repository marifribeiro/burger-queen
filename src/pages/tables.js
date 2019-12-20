import React, { useState } from 'react';

import Breakfast from '../components/Breakfast/index';
import Lunch from '../components/Lunch/index';
import Navbar from '../components/Navbar/index';
import Order from '../components/Order';

function Tables() {

  const [order, setOrder] = useState([])

  function selectItem(item) {
    if (order.filter(repeatedItem => repeatedItem.id === item.id).length == 0) {
      setOrder([...order, item]);
    } else {
      removeItem(item)
    }
    
  }

  function removeItem(item) {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item)
    order.splice(itemIndex, 1)
    setOrder([...order])
  }
  
  return (
    <div className="tables">
      <Navbar />
      <Breakfast onClick={selectItem} />
      <Lunch onClick={selectItem} />
      <Order item={order} handleRemove={removeItem}/>
    </div>
  )
}

export default Tables;
