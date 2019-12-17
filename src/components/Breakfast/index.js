import React, { useState, useEffect } from 'react';
import './styles.css';
import firebase from '../../firebase';

import MenuItem from '../MenuItem/index';

function useItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    firebase.firestore().collection('breakfast').onSnapshot((snap) => {
      const newItems = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setItems(newItems);
    })
  }, [])

  return items;
}

function Breakfast(props) {
  const items = useItems()

  return(
    <>
     <h2 className="breakfast-title">Café da manhã</h2>
      <div className="breakfast">
        {items.map((item) => <MenuItem onClick={props.onClick} key={item.id} name={item.name} price={item.price} />)}
      </div>
    </>
  )
}

export default Breakfast;