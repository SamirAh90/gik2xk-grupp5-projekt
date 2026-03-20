// Importerar Express-ramverket som används för att skapa API:er
const express = require("express");

// Skapar en router från Express
// Routern används för att definiera endpoints (routes) för produkter
const router = express.Router();

// Importerar databastabeller (Sequelize-modeller)
const Produkt = require("../models/Product"); // Modell som representerar tabellen för produkter
const Betyg = require("../models/Rating"); // Modell som representerar betyg kopplade till produkter

/*
 * API ROUTER - PRODUKTER
 * Den här filen hanterar alla API-anrop som gäller produkter.
 * Här finns funktioner för att:
 * - hämta produkter
 * - skapa produkter
 * - uppdatera produkter
 * - ta bort produkter
 * - lägga till betyg på produkter
 */

// --------------------------------------------------
// GET /products - hämta alla produkter
// --------------------------------------------------
router.get("/", async (req, res) => {
  try {
    // Hämtar alla produkter från databasen
    const produkter = await Produkt.findAll();

    // Skickar tillbaka listan med produkter i JSON-format
    res.json(produkter);
  } catch (fel) {
    // Om något går fel på servern returneras statuskod 500
    res.status(500).json({ meddelande: "Fel vid hämtning av produkter" });
  }
});

// --------------------------------------------------
// GET /products/:id - hämta en specifik produkt med dess betyg
// --------------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    // Hämtar en produkt baserat på ID från URL:en
    // Samtidigt hämtas alla betyg kopplade till produkten
    const produkt = await Produkt.findByPk(req.params.id, {
      include: [{ model: Betyg, as: "ratings" }], // Hämtar relaterade betyg
    });

    // Kontroll om produkten finns
    if (produkt) {
      res.json(produkt);
    } else {
      // Om produkten inte hittas
      res.status(404).json({ meddelande: "Produkten hittades inte" });
    }
  } catch (fel) {
    // Serverfel
    res.status(500).json({ meddelande: "Fel vid hämtning av produkten" });
  }
});

// --------------------------------------------------
// POST /products - skapa en ny produkt
// --------------------------------------------------
router.post("/", async (req, res) => {
  try {
    // Skapar en ny produkt med data som skickas från frontend
    const nyProdukt = await Produkt.create(req.body);

    // Returnerar den skapade produkten med statuskod 201 (Created)
    res.status(201).json(nyProdukt);
  } catch (fel) {
    // Fel vid skapande av produkt
    res.status(500).json({ meddelande: "Fel vid skapande av produkten" });
  }
});

// --------------------------------------------------
// PUT /products/:id - uppdatera en produkt
// --------------------------------------------------
router.put("/:id", async (req, res) => {
  try {
    // Uppdaterar produkten som matchar ID:t i URL:en
    const [uppdaterad] = await Produkt.update(req.body, {
      where: { id: req.params.id },
    });

    // Kontroll om en produkt faktiskt uppdaterades
    if (uppdaterad) {
      res.json({ meddelande: "Produkten uppdaterades" });
    } else {
      // Om produkten inte finns
      res.status(404).json({ meddelande: "Produkten hittades inte" });
    }
  } catch (fel) {
    // Serverfel vid uppdatering
    res.status(500).json({ meddelande: "Fel vid uppdatering av produkten" });
  }
});

// --------------------------------------------------
// DELETE /products/:id - ta bort en produkt
// --------------------------------------------------
router.delete("/:id", async (req, res) => {
  try {
    // Försöker ta bort produkten från databasen
    const borttagen = await Produkt.destroy({
      where: { id: req.params.id },
    });

    // Om en produkt raderades
    if (borttagen) {
      res.json({ meddelande: "Produkten raderades" });
    } else {
      // Om produkten inte finns
      res.status(404).json({ meddelande: "Produkten hittades inte" });
    }
  } catch (fel) {
    // Serverfel
    res.status(500).json({ meddelande: "Fel vid borttagning av produkten" });
  }
});

// --------------------------------------------------
// POST /products/:id/addRating - lägg till ett betyg på en produkt
// --------------------------------------------------
router.post("/:id/addRating", async (req, res) => {
  // Hämtar data från request body (frontend)
  const { rating, comment, userId } = req.body;

  try {
    // Kontrollera att produkten finns i databasen
    const produkt = await Produkt.findByPk(req.params.id);

    if (!produkt) {
      return res.status(404).json({ meddelande: "Produkten hittades inte" });
    }

    // Skapar ett nytt betyg kopplat till produkten
    const nyttBetyg = await Betyg.create({
      rating, // Själva betyget (t.ex. 1–5 stjärnor)
      comment, // Användarens kommentar
      productId: req.params.id, // Kopplar betyget till produkten
      userId: userId || null, // Om användare finns kopplas betyget till den
    });

    // Returnerar det nya betyget
    res.status(201).json(nyttBetyg);
  } catch (fel) {
    // Serverfel
    res.status(500).json({ meddelande: "Fel vid tillägg av betyg" });
  }
});

// Exporterar routern så den kan användas i huvudservern
module.exports = router;