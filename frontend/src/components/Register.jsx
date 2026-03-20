import React, { useState } from 'react'; // Importerar React och useState-hook för statehantering
import axios from 'axios'; // För API-anrop till backend
import { useNavigate, Link } from 'react-router-dom'; // useNavigate för att programatiskt navigera, Link för navigering

/*
 * FRONTEND KOMPONENT: REGISTRERA (Register)
 * Låter användaren skapa ett nytt konto i webbshoppen via ett formulär.
 */
function Register() {
  // Statevariabler för formulärets fält
  const [name, setName] = useState(''); // För användarnamn
  const [email, setEmail] = useState(''); // För e-post
  const [password, setPassword] = useState(''); // För lösenord
  const navigate = useNavigate(); // Hook för att navigera programatiskt

  // Funktion som körs när formuläret skickas
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindrar default formulärsubmit som skulle ladda om sidan

    // API-anrop: Skapar en ny användare i backend
    axios.post('http://localhost:3305/users', {
      name,
      email,
      password,
      role: 'user' // Alla nya registreringar blir vanliga användare
    })
      .then(res => {
        alert('Konto skapat! Du kan nu logga in.'); // Meddelande om lyckad registrering
        navigate('/login'); // Navigerar användaren till inloggningssidan
      })
      .catch(() => {
        // Hantering om något går fel (t.ex. e-post redan registrerad)
        alert('Fel vid registrering. E-postadressen är antagligen redan registrerad.');
      });
  };

  return (
    <div className="card p-4 mx-auto mt-5 shadow-sm" style={{ maxWidth: '500px' }}>
      <h1 className="mb-4">Skapa Konto</h1>

      {/* Registreringsformulär */}
      <form onSubmit={handleSubmit}>
        {/* Namnfält */}
        <div className="mb-3">
          <label>Namn</label>
          <input
            type="text"
            className="form-control"
            value={name} // Bindning till state
            onChange={e => setName(e.target.value)} // Uppdaterar state när användaren skriver
            required // Obligatoriskt fält
          />
        </div>

        {/* E-postfält */}
        <div className="mb-3">
          <label>E-post</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Lösenord */}
        <div className="mb-4">
          <label>Lösenord</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit-knapp */}
        <button className="btn btn-success w-100 fw-bold" type="submit">
          Registrera dig nu
        </button>
      </form>

      {/* Länk till inloggning för redan registrerade användare */}
      <div className="mt-4 text-center">
        <span>Har du redan ett konto? </span>
        <Link to="/login" className="text-decoration-none fw-bold">Logga in</Link>
      </div>
    </div>
  );
}

export default Register; // Exporterar komponenten