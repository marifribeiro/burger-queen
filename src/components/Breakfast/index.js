import React from 'react';
import './styles.css';

import MenuItem from '../MenuItem/index';

function Breakfast() {
  return(
    <>
     <h2 class="title">Breakfast Menu</h2>
      <div className="breakfast">
        <MenuItem name="Café americano" price="5" />
        <MenuItem name="Café com leite" price="7" />
        <MenuItem name="Misto quente" price="10" />
        <MenuItem name="Suco de fruta natural" price="7" />
      </div>
    </>
  )
}

export default Breakfast;