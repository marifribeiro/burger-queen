import React from 'react';
import './styles.css';

import Breakfast from './components/Breakfast/index';
import Lunch from './components/Lunch/index';
import Logo from './components/Logo/index';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Logo />
      <h4 className="text">Clique nos itens que gostaria de pedir!</h4>
      <Breakfast />
      <Lunch />
      <Order />
    </div>
  );
}

export default App;
