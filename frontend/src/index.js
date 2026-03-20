// Importerar React-biblioteket som krävs för att skapa React-komponenter
import React from 'react';

// Importerar ReactDOM som används för att rendera React-komponenter in i DOM:en (HTML-sidan)
import ReactDOM from 'react-dom';

// Importerar huvudkomponenten App, som innehåller all routing och layout för webbshoppen
import App from './App';

// Importerar Bootstrap CSS för färdiga grid-system, knappar, kort, formulär mm
import 'bootstrap/dist/css/bootstrap.min.css';

// Importerar anpassad CSS för webbshoppen (färger, font, skuggor, knappar, footer etc)
import './index.css';


// Renderar React-applikationen till HTML-elementet med id="root"
// <React.StrictMode> aktiverar extra kontroller och varningar under utveckling
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Huvudkomponenten som innehåller navbar, routing, footer och allt UI */}
  </React.StrictMode>,
  document.getElementById('root') // Här placeras appen i HTML:ens <div id="root"></div>
);