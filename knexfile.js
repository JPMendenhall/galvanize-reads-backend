var env = require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://localhost/greads",
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
