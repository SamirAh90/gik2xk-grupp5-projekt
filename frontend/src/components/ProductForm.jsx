import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

/*
 * FRONTEND: PRODUCT FORM
 * Denna komponent används både för att skapa nya produkter
 * och för att redigera befintliga produkter.
 * Om ett `id` finns i URL:en hämtas produktdata för redigering.
 */
function ProductForm() {
  const { id } = useParams(); // Hämta produkt-ID från URL (om det finns)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    imageUrl: ''
  });
  const navigate = useNavigate();

  // Om `id` finns, hämta produktens data för redigering
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3305/products/${id}`)
        .then(response => {
          setFormData(response.data); // Fyll formuläret med befintliga värden
        })
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  // Hantera input-förändringar
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Skicka formulärdata
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // PUT-anrop för att uppdatera befintlig produkt
      axios.put(`http://localhost:3305/products/${id}`, formData)
        .then(() => {
          alert('Product updated!');
          navigate('/'); // Navigera tillbaka till startsidan
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
      // POST-anrop för att skapa en ny produkt
      axios.post(`http://localhost:3305/products`, formData)
        .then(() => {
          alert('Product created!');
          navigate('/'); // Navigera tillbaka till startsidan
        })
        .catch(error => console.error('Error creating product:', error));
    }
  };

  return (
    <div className="card p-4">
      <h1>{id ? 'Edit Product' : 'New Product'}</h1>
      <Form onSubmit={handleSubmit}>
        {/* Produktnamn */}
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Produktbeskrivning */}
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Pris */}
        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Lagerantal */}
        <Form.Group controlId="stock" className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Bild-URL */}
        <Form.Group controlId="imageUrl" className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id ? 'Update Product' : 'Create Product'}
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;