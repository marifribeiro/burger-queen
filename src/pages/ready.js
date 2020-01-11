import React, { useState, useEffect } from 'react';
import db from '../utils/firebase';

import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    db.collection('orders').orderBy('ordered').onSnapshot((snap) => {
      const newItems = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setItems(newItems);
    })
  }, [])

  return items;
}


function Ready() {
  const items = useItems()

  function orderDelivered(id) {
    db.collection("orders").doc(id).update({
      delivered: new Date().toLocaleString(),
    })
  }

  return (
  <>
    <Navbar />
    <div className='ready-container'>
      { items.map(item => (
        <OrderCard 
          {...item} 
          key={item.id} 
          buttonLabel={'Entregue'} 
          condition={!item.delivered && item.done} 
          onClick={() => orderDelivered(item.id)} 
        />
      )) }
    </div>
  </>
  )
}

export default Ready;