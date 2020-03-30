const Sequelize = require("sequelize");

// Extablishing a connction to our remote db hosted in ElephantSQL
// Database URL defined in .env file in root 
const connection = new Sequelize(process.env.DATABASE_URL);

module.exports = connection;