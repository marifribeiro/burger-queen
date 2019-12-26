import React, { useState } from 'react';

import Breakfast from '../components/Breakfast/index';
import Lunch from '../components/Lunch/index';
import Navbar from '../components/Navbar/index';
import Order from '../components/Order';

import db from '../utils/firebase';

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
  
  function changeAmount(item, operation) {
    if (operation === 'add') {
      var count = item.amount + 1;
    } else if (operation === 'minus') {
      var count = item.amount >= 2 ? item.amount - 1 : 1;
    }
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    order.splice(itemIndex, 1, {...item, amount: count})
    setOrder([...order]);
    return count;
  }

  function sendOrder(order) {
    db.collection("orders").add({
      timestamp: new Date(),
      table: 'table',
      total: order.reduce((acc, curr) => acc + (curr.price * curr.amount), 0) + ",00",
      order: order
    })
  }

  return (
    <div className="tables">
      <Navbar />
      <Breakfast onClick={selectItem} />
      <Lunch onClick={selectItem} />
      <Order 
        item={order}
        handleRemove={removeItem}
        handleAdd={changeAmount}
        handleMinus={changeAmount}
        send={() => sendOrder(order)}
      />
    </div>
  )
}

export default Tables;
