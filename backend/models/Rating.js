// Importerar datatyper från Sequelize (t.ex. FLOAT, TEXT)
const { DataTypes } = require('sequelize');

// Importerar databaskopplingen
const sequelize = require('../config/db');

// Importerar Product-modellen eftersom varje betyg kopplas till en produkt
const Product = require('./Product');

// Importerar User-modellen om man vill spåra vilken användare som gav betyget
const User = require('./User');

// --------------------------------------------------
// Rating-modell
// Representerar ett betyg på en produkt
// --------------------------------------------------
const Rating = sequelize.define('Rating', {

  // Själva betyget (t.ex. 1–5 stjärnor)
  rating: {
    type: DataTypes.FLOAT, // FLOAT så man kan ha halva poäng (t.ex. 4.5)
    allowNull: false // Betyget är obligatoriskt
  },

  // Valfri kommentar från användaren
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  }

});

// --------------------------------------------------
// Associations / relationer
// --------------------------------------------------

// En produkt kan ha många betyg
Product.hasMany(Rating, {
  foreignKey: 'productId', // Koppling via productId
  as: 'ratings' // Alias som används när man hämtar med include
});

// Ett betyg tillhör en produkt
Rating.belongsTo(Product, {
  foreignKey: 'productId'
});

// Valfritt: spåra vilken användare som gav betyget
User.hasMany(Rating, {
  foreignKey: 'userId',
  as: 'userRatings'
});
Rating.belongsTo(User, {
  foreignKey: 'userId'
});

// Exporterar modellen så den kan användas i routes eller andra modeller
module.exports = Rating;