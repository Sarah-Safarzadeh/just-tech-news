// IMPORT THE SEQUELIZE CONSTRUCTOR FROM THE LIBRARY
const Sequelize = require('sequelize');

require('dotenv').config();

// CREATE THE CONNECTION TO OUR DATABASE, PASS IN MYSQL INFOFOR USERNAME AND PASSWORD
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost', 
    dialect: 'mysql',
    port: 3306
});
module.exports = sequelize;