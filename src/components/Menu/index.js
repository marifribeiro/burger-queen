import React, { useState, useEffect } from 'react';
import './styles.css';
import db from '../../utils/firebase';

import MenuItem from '../MenuItem/index';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    db.collection('menu').get()
      .then((snap) => {
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

  const menuTypes = [
    {title: "Hamburguer", items: items.filter(item => item.type === "burger" )},
    {title: "Acompanhamentos", items: items.filter(item => item.type === "side" )},
    {title: "Bebidas", items: items.filter(item => item.type === "drink" )},
  ]

  console.log(menuTypes)

  return(
    <>
      <h2 className="menu-title">Café da manhã</h2>
      <div className="menu-border section">
      {items.map((item) => item.type === "breakfast" ? <MenuItem onClick={() => getItems(item)} key={item.id} {...item} /> : false)}
      </div>

      <h2 className="menu-title">Almoço e jantar</h2>
      <div className="menu">
        <div className="join">
        {
          menuTypes.map(menuItem => (
            <div className="menu-border">
              <span className="menu-subtitle">{menuItem.title}</span>
              <span className="section">
                {menuItem.items.map((item) => <MenuItem onClick={() => getBurger(item)} key={item.id} {...item} />)}
              </span>
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default Menu;