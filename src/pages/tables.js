import React, { useState } from 'react';

import Breakfast from '../components/Breakfast/index';
import Lunch from '../components/Lunch/index';
import Logo from '../components/Navbar/index';
import Order from '../components/Order';

function Tables() {

  const [order, setOrder] = useState([])

  function selectItem(item) {
    setOrder([...order, item]);
    console.log(order)
  }

  function removeItem(item) {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item)
    console.log(itemIndex)
    console.log(order)
    order.splice(itemIndex, 1)
    setOrder([...order])
  }
  
  return (
    <div className="tables">
      <Logo />
      <h4 className="text">Clique nos itens que gostaria de pedir!</h4>
      <Breakfast onClick={selectItem} />
      <Lunch onClick={selectItem} />
      <Order item={order} handleRemove={removeItem}/>
    </div>
  )
}

export default Tables;
