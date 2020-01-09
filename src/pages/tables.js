import React, { useState } from 'react';

import Menu from '../components/Menu/index';
import Navbar from '../components/Navbar/index';
import Order from '../components/Order';

import db from '../utils/firebase';

function Tables() {

  const [order, setOrder] = useState([])
  const [table, setTable] = useState([])
  const [name, setName] = useState([])

  function selectItem(item) {
    if (item.type === 'regular' && order.filter(value => value.id === item.id).length === 0) {
      setOrder([...order, {...item, amount: 1}]);
    } else if (item.type === 'regular' && order.filter(value => value.id === item.id).length >= 1) {
      changeAmount(item, 'add')
    } else if (item.type === 'burger') {
      setOrder([...order, {...item, amount: 1}]);
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
      console.log(item)
    } else if (operation === 'minus') {
      var count = item.amount >= 2 ? item.amount - 1 : 1;
    }
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    order.splice(itemIndex, 1, {...item, amount: count})
    setOrder([...order]);
    return count;
  }

  function getOptions(option) {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === option.id);
    const newOrder = order.map((item, index) => index === itemIndex ? option : item);
    setOrder(newOrder);
  }

  function sendOrder(order, name, table) {
    db.collection("orders").add({
      timestamp: new Date(),
      table: 'table',
      total: order.reduce((acc, curr) => acc + (curr.price * curr.amount), 0) + ",00",
      order: order,
      table: table,
      name: name
    })
  }

  return (
    <div className="tables">
      <Navbar />
      <Menu onClick={selectItem} />
      <Order 
        item={order}
        handleRemove={removeItem}
        handleAdd={changeAmount}
        handleMinus={changeAmount}
        handleTable={setTable}
        handleName={setName}
        handleBurger={getOptions}
        handleExtra={getOptions}
        send={() => sendOrder(order, name, table)}
      />
    </div>
  )
}

export default Tables;
