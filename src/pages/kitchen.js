import React, { useEffect, useState } from 'react';
import db from '../utils/firebase';

import Navbar from '../components/Navbar';
import KitchenCard from '../components/KitchenCard';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    db.collection('orders').onSnapshot((snap) => {
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
  return (
    <>
      <Navbar />
      {
        items.map(item => <KitchenCard {...item} />)
      }
      
      <div>Em construção!</div>
    </>
  )
}

export default Kitchen;