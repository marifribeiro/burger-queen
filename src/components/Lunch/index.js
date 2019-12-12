import React from 'react';
import './styles.css';

import MenuItem from '../MenuItem/index';

function Lunch() {
  return(
    <>
    <h2 class="lunch-title">Almoço e jantar</h2>
    <div className="lunch">
      <span className="lunch-subtitle">Hambúrgers</span>
      <span className="section burgers">
        <MenuItem name="Hambúrguer simples" price="10" />
        <MenuItem name="Hambúrger duplo" price="15" />
      </span>
      <span className="lunch-subtitle">Acompanhamentos</span>
      <span className="section sides">
        <MenuItem name="Batata frita" price="5" />
        <MenuItem name="Anéis de cebola" price="5" />
      </span>
      <span className="lunch-subtitle">Bebidas</span>
      <span className="section drinks">
        <MenuItem name="Água 500ml" price="5" />
        <MenuItem name="Água 750ml" price="7" />
        <MenuItem name="Refrigerante 500ml" price="7" />
        <MenuItem name="Refrigerante 750ml" price="10" />
      </span>
    </div>
    </>
  )
}

export default Lunch;