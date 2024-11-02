import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="containerHeader">
        <h1 className="icono">
          <img src="https://pedidosya.dhmedia.io/image/pedidosya/restaurants/7ab158c8-828b-481c-adeb-bbece50fabb1.jpg?quality=70&width=100&webp=1" alt="logo" />
          Comida Venezolana
        </h1>
        <a href="#" id="cartIcon" onClick={() => console.log('Abrir carrito')}>
          <i className="fas fa-shopping-cart"></i> Carrito
        </a>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/alta">Alta</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;