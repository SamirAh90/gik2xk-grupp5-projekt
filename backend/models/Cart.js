// Importerar datatyper från Sequelize (t.ex. INTEGER, STRING, BOOLEAN)
const { DataTypes } = require('sequelize');

// Importerar databaskopplingen
const sequelize = require('../config/db');

// Importerar Product-modellen eftersom den ska kopplas till Cart
const Product = require('./Product');

// --------------------------------------------------
// Cart-modell
// Representerar en användares varukorg i databasen
// --------------------------------------------------
const Cart = sequelize.define('Cart', {

  // ID för användaren som äger varukorgen
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false // Måste finnas en användare kopplad till varukorgen
  },

  // Visar om varukorgen är betald eller inte
  isPaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false // Standard är att varukorgen inte är betald
  }

});

// --------------------------------------------------
// CartItem-modell (mellantabell)
// Används för relationen mellan Cart och Product
// --------------------------------------------------
const CartItem = sequelize.define('CartItem', {

  // Hur många av en produkt som finns i varukorgen
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1 // Standard är 1 produkt
  }

});

// --------------------------------------------------
// Relationer mellan tabeller
// --------------------------------------------------

// En varukorg kan innehålla många produkter
Cart.belongsToMany(Product, {
  through: CartItem, // Mellantabellen
  foreignKey: 'cartId' // Koppling till Cart
});

// En produkt kan finnas i många varukorgar
Product.belongsToMany(Cart, {
  through: CartItem, // Mellantabellen
  foreignKey: 'productId' // Koppling till Product
});

// Exporterar modellerna så de kan användas i andra filer
module.exports = { Cart, CartItem };