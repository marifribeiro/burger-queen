import React from 'react';
import './styles.css';

import {
  Link
} from "react-router-dom";


function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        Bem vindo!
        Qual seção quer visitar?
      </div>
      <div className="intro-links">
        <button className='link'>
          <Link to="/mesas">Novo pedido</Link>
        </button>
        <button className='link'>
          <Link to="/cozinha">Cozinha</Link>
        </button>
        <button className='link'>
          <Link to="/prontos">Pedidos prontos</Link>
        </button>
      </div>
    </div>
  )
}

export default Intro;