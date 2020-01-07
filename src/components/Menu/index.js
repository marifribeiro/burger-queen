import React, { useState, useEffect } from 'react';
import './styles.css';
import db from '../../utils/firebase';

import MenuItem from '../MenuItem/index';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    db.collection('menu').onSnapshot((snap) => {
      const newItems = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setItems(newItems);
    })
  }, [])

  return items;
}

function Menu(props) {
  const items = useItems()

  function getItems(item) {
    props.onClick({name: item.name, price: item.price, id: item.id, type: 'regular'})
  }

  function getBurger(item) {
    props.onClick({type: 'burger', name: item.name, price: item.price, id: item.id, burger: item.burger, extras: item.extras})
  }

  return(
    <>
    <h2 className="menu-title">Café da manhã</h2>
    <div className="menu-border section">
    {items.map((item) => item.type === "breakfast" ? <MenuItem onClick={() => getItems(item)} key={item.id} name={item.name} price={item.price} /> : false)}
    </div>

    <h2 className="menu-title">Almoço e jantar</h2>
    <div className="menu">
      <div className="join">
        <div className="menu-border">
          <span className="menu-subtitle">Hambúrgers</span>
          <span className="section">
            {items.map((item) => item.type === "burger" ? <MenuItem onClick={() => getBurger(item)} key={item.id} name={item.name} price={item.price} /> : false)}
          </span>
        </div>
        <div className="menu-border">
          <span className="menu-subtitle">Acompanhamentos</span>
          <span className="section">
            {items.map((item) => item.type === "side" ? <MenuItem onClick={() => getItems(item)} key={item.id} name={item.name} price={item.price} /> : false)}
          </span>
        </div>
      </div>
      <div className="menu-border">
        <span className="menu-subtitle">Bebidas</span>
        <span className="section">
          {items.map((item) => item.type === "drink" ? <MenuItem onClick={() => getItems(item)} key={item.id} name={item.name} price={item.price} /> : false)}
        </span>
      </div>
    </div>
    </>
  )
}

export default Menu;