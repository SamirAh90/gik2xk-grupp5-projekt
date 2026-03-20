// Importerar Sequelize från biblioteket "sequelize"
// Sequelize används för att kommunicera med databaser som t.ex. MySQL
const { Sequelize } = require("sequelize");

// Importerar dotenv för att kunna läsa miljövariabler från en .env-fil
// (t.ex. databasnamn, användare och lösenord)
const dotenv = require("dotenv");

// Laddar in alla variabler från .env-filen till process.env
dotenv.config();

// Skapar en ny instans av Sequelize för att ansluta till databasen
const databaskoppling = new Sequelize(
  process.env.DB_NAME, // Namnet på databasen (från .env)
  process.env.DB_USER, // Databasanvändare (från .env)
  process.env.DB_PASS, // Databaslösenord (från .env)
  {
    host: process.env.DB_HOST, // Adressen till databasservern (från .env)
    dialect: "mysql", // Vilken typ av databas som används (MySQL)
    port: 3306, // Standardport för MySQL
    logging: false, // Stänger av loggning av SQL-frågor i konsolen
    dialectOptions: {
      connectTimeout: 10000, // Max tid att vänta på anslutning (10 sekunder)
    },
  }
);

// En asynkron funktion som testar om anslutningen till databasen fungerar
async function anslutDatabas() {
  try {
    // Försöker autentisera (ansluta) till databasen
    await databaskoppling.authenticate();

    // Om anslutningen lyckas skrivs detta ut i konsolen
    console.log("✅ Databasen är ansluten!");
  } catch (fel) {
    // Om något går fel skrivs ett felmeddelande ut
    console.error("❌ Databasanslutningen misslyckades:", fel);
  }
}

// Kör funktionen direkt när filen startas
anslutDatabas();

// Exporterar databaskopplingen så att den kan användas i andra filer i projektet
module.exports = databaskoppling;