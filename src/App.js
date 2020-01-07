import React from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Kitchen from './pages/kitchen';
import Tables from './pages/tables';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cozinha" component={Kitchen} />
          <Route path="/mesas" component={Tables} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
