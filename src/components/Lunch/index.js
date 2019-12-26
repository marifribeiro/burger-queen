import React, { useState, useEffect } from 'react';
import './styles.css';
import db from '../../utils/firebase';

import MenuItem from '../MenuItem/index';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    db.collection('lunch').onSnapshot((snap) => {
      const newItems = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setItems(newItems);
    })
  }, [])

  return items;
}

function Lunch(props) {
  const items = useItems()

  function getItems(item) {
    props.onClick({name: item.name, price: item.price, id: item.id, amount: 1})
  }

  return(
    <>
    <h2 className="lunch-title">Almoço e jantar</h2>
    <div className="lunch">
      <div className="join">
        <div className="lunch-border">
          <span className="lunch-subtitle">Hambúrgers</span>
          <span className="section">
            {items.map((item) => item.type === "burger" ? <MenuItem onClick={() => getItems(item)} key={item.id} name={item.name} price={item.price} /> : false)}
          </span>
        </div>
        <div className="lunch-border">
          <span className="lunch-subtitle">Acompanhamentos</span>
          <span className="section">
            {items.map((item) => item.type === "side" ? <MenuItem onClick={() => getItems(item)} key={item.id} name={item.name} price={item.price} /> : false)}
          </span>
        </div>
      </div>
      <div className="lunch-border">
        <span className="lunch-subtitle">Bebidas</span>
        <span className="section">
          {items.map((item) => item.type === "drink" ? <MenuItem onClick={() => getItems(item)} key={item.id} name={item.name} price={item.price} /> : false)}
        </span>
      </div>
    </div>
    </>
  )
}

export default Lunch;