// Importerar Express-ramverket som används för att skapa API:er
const express = require("express");

// Skapar en router som används för alla routes kopplade till användare
const router = express.Router();

// Importerar databastabeller (Sequelize-modeller)
const User = require("../models/User"); // Modell för användare
const { Cart } = require("../models/Cart"); // Modell för varukorg
const Product = require("../models/Product"); // Modell för produkter

/*
 * API ROUTER - ANVÄNDARE
 * Den här filen innehåller alla endpoints som hanterar användare.
 * Exempel:
 * - hämta användare
 * - skapa konto
 * - uppdatera konto
 * - ta bort konto
 * - logga in
 * - hämta användarens varukorg
 *
 * Sequelize ORM används för att kommunicera med databasen.
 */

// --------------------------------------------------
// GET /users - Hämta alla användare från databasen
// --------------------------------------------------
router.get("/", async (req, res) => {
  try {
    // Hämtar alla användare från tabellen Users
    const users = await User.findAll();

    // Skickar tillbaka listan med användare i JSON-format
    res.json(users);
  } catch (error) {
    // Om något går fel på servern
    res.status(500).json({ message: "Error fetching users" });
  }
});

// --------------------------------------------------
// GET /users/:id - Hämta en specifik användare via ID
// --------------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    // Hämtar användaren med ett specifikt ID (primärnyckel)
    const user = await User.findByPk(req.params.id);

    // Kontroll om användaren finns
    if (user) {
      res.json(user);
    } else {
      // Om användaren inte hittas
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Serverfel
    res.status(500).json({ message: "Error fetching user" });
  }
});

// --------------------------------------------------
// POST /users - Skapa en ny användare
// --------------------------------------------------
router.post("/", async (req, res) => {
  try {
    // Skapar en ny användare med data som skickas från frontend
    const newUser = await User.create(req.body);

    // Returnerar den skapade användaren
    res.status(201).json(newUser);
  } catch (error) {
    // Fel vid skapande av användare
    res.status(500).json({ message: "Error creating user" });
  }
});

// --------------------------------------------------
// PUT /users/:id - Uppdatera en användares information
// --------------------------------------------------
router.put("/:id", async (req, res) => {
  try {
    // Uppdaterar användaren med matchande ID
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });

    // Kontroll om en användare faktiskt uppdaterades
    if (updated) {
      res.json({ message: "User updated successfully" });
    } else {
      // Om användaren inte finns
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Serverfel
    res.status(500).json({ message: "Error updating user" });
  }
});

// --------------------------------------------------
// DELETE /users/:id - Ta bort en användare
// --------------------------------------------------
router.delete("/:id", async (req, res) => {
  try {
    // Försöker ta bort användaren från databasen
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });

    // Om en användare raderades
    if (deleted) {
      res.json({ message: "User deleted successfully" });
    } else {
      // Om användaren inte hittas
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Serverfel
    res.status(500).json({ message: "Error deleting user" });
  }
});

// --------------------------------------------------
// GET /users/:id/getCart
// Hämtar den aktiva (obetalda) varukorgen för en användare
// --------------------------------------------------
router.get("/:id/getCart", async (req, res) => {
  const userId = req.params.id;

  try {
    // Letar efter en varukorg som tillhör användaren
    // isPaid: false betyder att köpet inte är klart ännu
    const cart = await Cart.findOne({
      where: { userId, isPaid: false },

      // Hämtar alla produkter som finns i varukorgen
      include: [
        {
          model: Product,
          // through används eftersom Cart och Product har en many-to-many relation
          // quantity visar hur många av varje produkt som ligger i varukorgen
          through: { attributes: ["quantity"] },
        },
      ],
    });

    // Om varukorgen hittas
    if (cart) {
      res.json(cart);
    } else {
      // Om användaren inte har någon aktiv varukorg
      res.status(404).json({ message: "Cart not found for this user" });
    }
  } catch (error) {
    // Serverfel
    res.status(500).json({ message: "Error fetching user's cart" });
  }
});

// --------------------------------------------------
// POST /users/login
// Loggar in en användare
// --------------------------------------------------
router.post("/login", async (req, res) => {
  // Hämtar email och lösenord från frontend
  const { email, password } = req.body;

  try {
    // Letar efter en användare med samma email i databasen
    const user = await User.findOne({ where: { email } });

    // Kontrollerar att användaren finns och att lösenordet stämmer
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Returnerar grundläggande information om användaren
    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role, // Kan användas för att avgöra admin eller vanlig användare
    });
  } catch (err) {
    // Skriver ut felet i serverns konsol
    console.error(err);

    // Skickar serverfel till klienten
    res.status(500).json({ message: "Login error" });
  }
});

// Exporterar routern så den kan användas i server.js eller app.js
module.exports = router;