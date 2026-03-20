// Importerar datatyper från Sequelize (t.ex. STRING, TEXT, FLOAT)
const { DataTypes } = require('sequelize');

// Importerar databaskopplingen
const sequelize = require('../config/db');

// --------------------------------------------------
// Product-modell
// Representerar en produkt i webbshoppen
// --------------------------------------------------
const Product = sequelize.define('Product', {

  // Namn på produkten
  name: {
    type: DataTypes.STRING,
    allowNull: false // Namn är obligatoriskt
  },

  // Beskrivning av produkten
  description: {
    type: DataTypes.TEXT,
    allowNull: false // Beskrivning är obligatoriskt
  },

  // Produktens pris
  price: {
    type: DataTypes.FLOAT,
    allowNull: false // Pris är obligatoriskt
  },

  // Antal produkter i lager
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0 // Standardvärde är 0
  },

  // Länk till produktbild (kan vara null)
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },

});

// Exporterar modellen så den kan användas i andra filer (t.ex. routes eller Cart)
module.exports = Product;