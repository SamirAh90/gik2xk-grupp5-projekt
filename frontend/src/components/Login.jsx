import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

/*
 * FRONTEND: LOGIN
 * Denna komponent hanterar användarinloggning. 
 * E-post och lösenord skickas till backend via Axios.
 * Om inloggning lyckas sparas användaren i localStorage.
 */
function Login() {
  // State för inputfält
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router för navigering (alternativ till window.location)

  // Formulärsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindra vanlig form-submission
    axios.post('http://localhost:3305/users/login', { email, password })
      .then(res => {
        // Spara användarobjekt i localStorage (inklusive roll)
        localStorage.setItem('user', JSON.stringify(res.data));

        // Tvinga en full omladdning för att uppdatera hela appen
        window.location.href = '/';

        // Alternativ: navigate('/') kan användas istället för full omladdning
        // navigate('/');
      })
      .catch(() => {
        // Om felaktiga uppgifter visas alert
        alert('Invalid credentials');
      });
  };

  return (
    <div className="card p-4">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit-knapp */}
        <button className="btn btn-primary w-100 fw-bold" type="submit">
          Login
        </button>
      </form>

      {/* Länk till registreringssidan */}
      <div className="mt-4 text-center">
        <span> Är du en kund och vill skapa ett konto? </span>
        <Link to="/register" className="text-decoration-none fw-bold">Registrera dig här</Link>
      </div>
    </div>
  );
}

export default Login;