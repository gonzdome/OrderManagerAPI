const { Sequelize } = require('sequelize');
const { username, password, database, host, dialect, port } = require('../../config/database')

const options = { host, dialect, port }
const dbConection = new Sequelize(database, username, password, options)

module.exports = { dbConection, Sequelize: Sequelize };