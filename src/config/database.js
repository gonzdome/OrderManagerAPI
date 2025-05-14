const env = require('../utils/EnvSecrets');

module.exports = { 
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  port: env.DB_PORT
}
