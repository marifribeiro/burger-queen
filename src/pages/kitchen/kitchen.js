import React, { useEffect, useState } from 'react';
import db from '../../utils/firebase';
import './styles.css';

import Navbar from '../../components/Navbar';
import OrderCard from '../../components/OrderCard';

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

function Kitchen() {
  const items = useItems()

  function orderReady(id) {
    db.collection("orders").doc(id).update({
      done: new Date().toLocaleString(),
    })
  }
  
  return (
    <>
      <Navbar />
      <div className='kitchen-container'>
        { items.map(item => (
          <OrderCard 
            {...item} 
            key={item.id} 
            buttonLabel={'Pronto'} 
            condition={!item.done} 
            onClick={() => orderReady(item.id)} 
          />
        )) }
      </div>
    </>
  )
}

export default Kitchen;