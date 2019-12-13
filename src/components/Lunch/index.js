import React, { useState, useEffect } from 'react';
import './styles.css';
import firebase from '../../firebase';

import MenuItem from '../MenuItem/index';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    firebase.firestore().collection('lunch').onSnapshot((snap) => {
      const newItems = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setItems(newItems);
    })
  }, [])

  return items;
}

function Lunch() {
  const items = useItems()

  return(
    <>
    <h2 class="lunch-title">Almoço e jantar</h2>
    <div className="lunch">
      <div className="join">
        <span className="lunch-subtitle">Hambúrgers</span>
        <span className="lunch-subtitle">Acompanhamentos</span>
      </div>
      <span className="section">
        {items.map((item) => item.type === "burger" ? <MenuItem key={item.id} name={item.name} price={item.price} /> : false)}
        {items.map((item) => item.type === "side" ? <MenuItem key={item.id} name={item.name} price={item.price} /> : false)}
      </span>
      <span className="lunch-subtitle drinks">Bebidas</span>
      <span className="section drinks">
        {items.map((item) => item.type === "drink" ? <MenuItem key={item.id} name={item.name} price={item.price} /> : false)}
      </span>
    </div>
    </>
  )
}

export default Lunch;