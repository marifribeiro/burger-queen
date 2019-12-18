import React from 'react';
import './styles.css';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1 className="logo">Burger Queen</h1>
        </li>
        <li>
          <Link to="/mesas">Mesas</Link>
        </li>
        <li>
          <Link to="/cozinha">Cozinha</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;