// sync.js
// Detta script synkroniserar alla modeller med databasen
// och skapar tre admin-användare om de inte redan finns.

// --------------------------------------------------
// Importera modeller och databasanslutning
// --------------------------------------------------
const sequelize = require("./config/db"); // Databasanslutningen
const Product = require("./models/Product"); // Produktmodell
const User = require("./models/User"); // Användare/admin-modell
const { Cart, CartItem } = require("./models/Cart"); // Kundvagnsmodeller
const Rating = require("./models/Rating"); // Betygsmodell

// --------------------------------------------------
// Lista med admin-användare som ska seedas
// --------------------------------------------------
const adminAnvandare = [
  { email: "ludwig@du.se", name: "Ludwig", password: "lud123", role: "admin" },
  { email: "hangama@du.se", name: "Hangama", password: "han123", role: "admin" },
  { email: "samir@du.se", name: "Samir", password: "sam123", role: "admin" },
];

// --------------------------------------------------
// Synkronisera modellerna med databasen
// --------------------------------------------------
sequelize
  .sync({ alter: true }) // alter: true uppdaterar tabellerna utan att ta bort data
  .then(async () => {
    console.log("✔ Alla modeller synkroniserade!");

    // --------------------------------------------------
    // Skapa admin-användare om de inte redan finns
    // --------------------------------------------------
    for (const admin of adminAnvandare) {
      await User.findOrCreate({
        where: { email: admin.email }, // Kolla om admin med denna email redan finns
        defaults: admin,              // Om inte, skapa admin med dessa värden
      });
    }

    console.log("✔ Admin-användare skapade. Avslutar scriptet...");
    process.exit(0); // Avsluta scriptet när allt är klart
  })
  .catch((error) => {
    // Fångar fel vid synkronisering eller om databasen inte går att nå
    console.error("❌ Fel vid synkronisering av modeller:", error);
    process.exit(1); // Avsluta scriptet med felkod
  });