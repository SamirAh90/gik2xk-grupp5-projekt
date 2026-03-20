import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

/*
 * FRONTEND: VARUKORG (CART)
 * Denna komponent hämtar den inloggade användarens varukorg,
 * listar produkter, antal och pris, samt räknar ut totalpriset.
 */
function Cart() {
  // State för varukorgen
  const [cart, setCart] = useState(null);

  // Hämta användardata från localStorage (sparad vid login)
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // useEffect körs när komponenten mountas, hämtar varukorgen
  useEffect(() => {
    if (user) {
      // API-anrop till backend: /users/:id/getCart
      axios.get(`http://localhost:3305/users/${user.id}/getCart`)
        .then(response => setCart(response.data))
        .catch(error => console.error('Fel vid hämtning av varukorg:', error));
    }
  }, [user?.id]); // Körs när user.id finns

  // Om användaren inte är inloggad
  if (!user) return (
    <div className="container mt-4">
      <h3>Du måste vara inloggad för att se din varukorg 😎</h3>
    </div>
  );

  // Om varukorgen är tom
  if (!cart || !cart.Products || cart.Products.length === 0) return (
    <div className="container mt-4">
      <h2>Din varukorg är tom 😔.</h2>
    </div>
  );

  // Beräkna det sammanlagda priset för hela varukorgen
  const totalPrice = cart.Products.reduce(
    (sum, item) => sum + (item.price * item.CartItem.quantity), 0
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Din Varukorg</h1>

      {/* Lista alla produkter i varukorgen */}
      {cart.Products.map(item => (
        <div key={item.id} className="card mb-3 shadow-sm border-0">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title fw-bold">{item.name}</h5>
              <p className="card-text mb-1">Pris: ${item.price} / st</p>
              <p className="card-text text-muted mb-0">Antal: {item.CartItem.quantity}</p>
            </div>
            <div className="text-end">
              <strong>Delsumma: ${(item.price * item.CartItem.quantity).toFixed(2)}</strong>
            </div>
          </div>
        </div>
      ))}

      <hr className="my-4" />

      {/* Sammanlagt pris */}
      <div className="text-end">
        <h3>
          Sammanlagt Pris: <span className="text-success">${totalPrice.toFixed(2)}</span>
        </h3>
        <Button variant="success" size="lg" className="mt-3 px-5">
          Slutför köp
        </Button>
      </div>
    </div>
  );
}

export default Cart;