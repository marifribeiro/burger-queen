import React, { useEffect, useState } from 'react';
import db from '../../utils/firebase';
import './styles.css';
import Navbar from '../../components/Navbar';
import KitchenCard from '../../components/KitchenCard';

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

  function orderReady(id) {
    db.collection("orders").doc(id).update({
      done: new Date().toLocaleString(),
    })
  }

  const items = useItems()
  return (
    <>
      <Navbar />
      <div className='kitchen-container'>
        { items.map(item => <KitchenCard {...item} key={item.id} onClick={() => orderReady(item.id)} />) }
      </div>
    </>
  )
}

export default Kitchen;