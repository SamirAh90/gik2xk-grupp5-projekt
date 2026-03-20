// Importerar datatyper från Sequelize (t.ex. STRING)
const { DataTypes } = require('sequelize');

// Importerar databaskopplingen
const dbModule = require('../config/db');
const sequelize = dbModule.default || dbModule; // Hanterar både default och named export

// --------------------------------------------------
// User-modell
// Representerar en användare i systemet
// --------------------------------------------------
const User = sequelize.define('User', {

  // Användarens namn
  name: {
    type: DataTypes.STRING,
    allowNull: false // Namn måste anges
  },

  // Användarens email
  email: {
    type: DataTypes.STRING,
    allowNull: false, // Email är obligatoriskt
    unique: true      // Måste vara unikt (ingen annan användare kan ha samma email)
  },

  // Lösenord för användaren
  password: {
    type: DataTypes.STRING,
    allowNull: false // Lösenord är obligatoriskt
  },

  // Roll som användaren har
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user' // Standard är vanlig användare, kan också vara "admin"
  },

});

// Exporterar modellen så den kan användas i andra filer
module.exports = User;