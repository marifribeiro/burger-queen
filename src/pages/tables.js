import React, { useState } from 'react';

import Breakfast from '../components/Breakfast/index';
import Lunch from '../components/Lunch/index';
import Navbar from '../components/Navbar/index';
import Order from '../components/Order';

function Tables() {

  const [order, setOrder] = useState([])

  function selectItem(item) {
    if (order.filter(value => value.id === item.id).length === 0) {
      setOrder([...order, {...item, amount: 1}]);
    } else {
      removeItem(item)
    }
  }

  function removeItem(item) {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    order.splice(itemIndex, 1)
    setOrder([...order])
  }
  
  function addItem(item) {
    const count = item.amount + 1;
    const newItem = {...item, amount: count}
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    order.splice(itemIndex, 1)
    setOrder([...order, newItem]);
    return count;
  }

  function minusItem(item) {
    if (item.amount >= 2) {
      const count = item.amount - 1;
      const newItem = {...item, amount: count}
      const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
      order.splice(itemIndex, 1)
      setOrder([...order, newItem]);
      return count;
    } else {
      const count = 1;
      const newItem = {...item, amount: count}
      const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
      order.splice(itemIndex, 1)
      setOrder([...order, newItem]);
      return count;
    }
  }

  return (
    <div className="tables">
      <Navbar />
      <Breakfast onClick={selectItem} />
      <Lunch onClick={selectItem} />
      <Order 
        item={order}
        handleRemove={removeItem}
        handleAdd={addItem}
        handleMinus={minusItem}
      />
    </div>
  )
}

export default Tables;
