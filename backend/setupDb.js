// setupDb.js - Skapar databasen och synkroniserar modellerna
const mysql = require("mysql2/promise"); // MySQL-bibliotek som stödjer async/await
require("dotenv").config(); // Laddar miljövariabler från .env

async function setupDatabase() {
  try {
    // --------------------------------------------------
    // 1. Anslut till MySQL utan att specificera en databas
    // --------------------------------------------------
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    });

    console.log("✔ Connected to MySQL");

    // --------------------------------------------------
    // 2. Skapa databasen om den inte finns
    // --------------------------------------------------
    await connection.execute(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    );
    console.log(`✔ Database ${process.env.DB_NAME} created or already exists`);

    // Stänger MySQL-anslutningen
    await connection.end();

    // --------------------------------------------------
    // 3. Synkronisera Sequelize-modeller
    // --------------------------------------------------
    console.log("Running model synchronization...");
    const sequelize = require("./config/db");
    const Product = require("./models/Product");
    const User = require("./models/User");
    const { Cart, CartItem } = require("./models/Cart");
    const Rating = require("./models/Rating");

    // sync med alter:true uppdaterar tabellerna för att matcha modellerna
    await sequelize.sync({ alter: true });
    console.log("✔ All models synchronized successfully.");

    // --------------------------------------------------
    // 4. Seed initiala admin-användare
    // --------------------------------------------------
    await User.findOrCreate({
      where: { email: "ludwig@du.se" },
      defaults: { name: "Ludwig", password: "lud123", role: "admin" },
    });
    await User.findOrCreate({
      where: { email: "hangama@du.se" },
      defaults: { name: "Hangama", password: "han123", role: "admin" },
    });
    await User.findOrCreate({
      where: { email: "samir@du.se" },
      defaults: { name: "Samir", password: "sam123", role: "admin" },
    });

    console.log("✔ Seeding complete. Setup finished!");
    process.exit(0); // Avslutar scriptet med kod 0 (framgång)
  } catch (error) {
    console.error("❌ Error during setup:", error.message);
    process.exit(1); // Avslutar med kod 1 vid fel
  }
}

// Kör setup-funktionen
setupDatabase();