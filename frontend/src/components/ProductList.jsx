import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

/*
 * FRONTEND: PRODUCT LIST
 * Denna komponent hämtar alla produkter från backend och listar dem.
 * Om användaren är admin visas ett meddelande.
 * Varje produkt är länkad till dess detaljsida och visar även en statisk rating (kan ändras senare till dynamisk).
 */
function ProductList() {
  const [products, setProducts] = useState([]); // State för alla produkter

  // Kontrollera om användaren är inloggad via localStorage
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Hämta produkter från backend när komponenten mountas
  useEffect(() => {
    axios.get('http://localhost:3305/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []); // Tom array: körs endast en gång

  return (
    <div>
      <h1 className="mb-4">Products</h1>

      {/* Visa meddelande beroende på roll */}
      {user && (
        user.role === 'admin' ? (
          <div className="alert alert-success">
            You are logged in as Admin 🤖: <strong>{user.name}</strong>
          </div>
        ) : (
          <div className="alert alert-info">
            You are logged in as Kund 🛒: <strong>{user.name}</strong>
          </div>
        )
      )}
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              {/* Produktbild */}
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                {/* Produktnamn med länk till produktdetalj */}
                <h5 className="card-title">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h5>
                {/* Produktbeskrivning */}
                <p className="card-text">{product.description}</p>
                {/* Produktpris */}
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                {/* Statisk rating (kan ändras till dynamisk senare) */}
                <Rating value={3} readOnly size="small" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;