import React, { useState } from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Kitchen from './pages/kitchen';
import Tables from './pages/tables';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/mesas">Mesas</Link>
            </li>
            <li>
              <Link to="/cozinha">Cozinha</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cozinha">
            <div>Em construção!</div>
          </Route>
          <Route path="/mesas">
            <Tables />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
  {/*return (
    <div className="App">
      <Logo />
      <h4 className="text">Clique nos itens que gostaria de pedir!</h4>
      <Breakfast onClick={selectItem} />
      <Lunch />
      <Order item={order}/>
    </div>
  );*/}
}

export default App;
