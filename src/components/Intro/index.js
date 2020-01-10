import React from 'react';
import './styles.css';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function Home() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        Bem vindo!
        Qual seção quer visitar?
      </div>
      <div className="intro-links">
        <span className='link'>
          <Link to="/mesas">Novo pedido</Link>
        </span>
        <span className='link'>
          <Link to="/cozinha">Cozinha</Link>
        </span>
        <span className='link'>
          <Link to="/prontos">Pedidos prontos</Link>
        </span>
      </div>
    </div>
  )
}

export default Home;