/*
 * BACKEND & ARKITEKTUR
 * Initiering av Node.js och Express API-servern.
 * Här importeras moduler och middleware:
 * - CORS: tillåter förfrågningar från React-frontend (cross-origin)
 * - express.json(): hanterar JSON-data i inkommande requests
 * Routers används för att hålla koden strukturerad.
 */

// Importerar Express-ramverket
const express = require('express');

// Importerar CORS-middleware
const cors = require('cors');

// Laddar miljövariabler från .env-filen
require('dotenv').config();

// Skapar en Express-app
const app = express();

// --------------------------------------------------
// Middleware
// --------------------------------------------------

// Gör att servern kan läsa JSON i inkommande requests
app.use(express.json());

// Tillåter cross-origin requests (t.ex. från React-frontend)
app.use(cors());

// --------------------------------------------------
// Routes
// --------------------------------------------------

// Importerar product-routers
const productRoutes = require('./routes/productRoutes');

// Importerar cart-routers
const cartRoutes = require('./routes/cartRoutes');

// Kopplar routes till endpoints
app.use('/products', productRoutes); // Alla requests som börjar med /products
app.use('/cart', cartRoutes);       // Alla requests som börjar med /cart

// --------------------------------------------------
// Test route
// --------------------------------------------------

// Enkel testroute för att kontrollera att servern körs
app.get('/', (req, res) => {
  res.send("✔ Server is running!");
});

// --------------------------------------------------
// Starta servern
// --------------------------------------------------

// PORT hämtas från .env, annars används standard 3305
const PORT = process.env.PORT || 3305;

// Startar servern
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// --------------------------------------------------
// User routes
// --------------------------------------------------

// Importerar user-routes (måste vara efter att app är initierad)
const userRoutes = require('./controllers/userRoutes');

// Mountar user-routes på /users
app.use('/users', userRoutes);