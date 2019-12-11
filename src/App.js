import React from 'react';
import './styles.css';
import firebase from './firebase';

import Breakfast from './components/Breakfast/index';
import Lunch from './components/Lunch/index';
import Logo from './components/Logo/index';

function App() {
  return (
    <div className="App">
      <Logo />
      <Breakfast />
      <Lunch />
    </div>
  );
}

export default App;
