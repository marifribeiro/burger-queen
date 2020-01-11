import React, { useState, useEffect } from 'react';
import db from '../../utils/firebase';
import './styles.css';

import Navbar from '../Navbar';
import OrderCard from '../OrderCard';

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


function OrdersGrid(props) {
  const items = useItems()

  return (
  <>
    <Navbar />
    <div className='grid-container'>
      { items.map(item => (
        <OrderCard 
          {...item} 
          key={item.id} 
          buttonLabel={props.buttonLabel} 
          condition={props.condition} 
          onClick={() => props.handleClick(item.id)} 
        />
      )) }
    </div>
  </>
  )
}

export default OrdersGrid;