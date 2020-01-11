import React, { useState } from 'react';

import Menu from '../components/Menu/index';
import Navbar from '../components/Navbar/index';
import OrderSection from '../components/OrderSection';
import Alert from '../components/Alert';

import db from '../utils/firebase';

function Tables() {

  const [order, setOrder] = useState([]);
  const [table, setTable] = useState([]);
  const [name, setName] = useState([]);
  const [modal, setModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  function selectItem(item) {
    if (item.type === 'regular' && order.filter(value => value.id === item.id).length === 0) {
      setOrder([...order, {...item, amount: 1}]);
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
    if (order.length === 0) {
      setModal(true)
      setAlertMessage('Adicione pelo menos um item ao pedido')
    } else if (name.length === 0) {
      setModal(true)
      setAlertMessage('Insira o nome do cliente')
    } else if (table.length === 0) {
      setModal(true)
      setAlertMessage('Insira o número da mesa')
    } else {
      db.collection("orders").add({
        ordered: new Date().toLocaleString(),
        total: order.reduce((acc, curr) => {
          const extraPrice = curr.extra === undefined || curr.extra === "Não" ? 0 : 1;
          return acc + ((curr.price + extraPrice) * curr.amount)
          }, 0) + ",00",
        order: order,
        table: table,
        name: name,
      })
    setOrder([]);
    setTable('');
    setName('');
    setModal(false);
    }
  }

  function closeAlert() {
    setModal(false)
  }

  return (
    <>
      {modal ? <Alert message={alertMessage} onClick={closeAlert} /> : null}
      <Navbar tablesActive={'active'}/>
      <Menu onClick={selectItem} />
      <OrderSection
        item={order}
        handleRemove={removeItem}
        handleAdd={changeAmount}
        handleMinus={changeAmount}
        handleTable={setTable}
        handleName={setName}
        tableValue={table}
        nameValue={name}
        handleBurger={getOptions}
        handleExtra={getOptions}
        send={() => sendOrder(order, name, table)}
      />
    </>
  )
}

export default Tables;
