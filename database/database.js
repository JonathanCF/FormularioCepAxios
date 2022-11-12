const Sequelize = require("sequelize");
require('dotenv').config()

const connection = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection
