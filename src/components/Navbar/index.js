import React from 'react';
import './styles.css';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="list-item">
          <h1 className="logo">Burger Queen</h1>
        </li>
        <li className="list-item nav-text">
          <Link to="/mesas">Mesas</Link>
        </li>
        <li className="list-item nav-text">
          <Link to="/cozinha">Cozinha</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;