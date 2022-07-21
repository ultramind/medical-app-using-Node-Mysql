const { createPool } = require('mysql')

// creating
const pool = createPool({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'medical-app-db',
  connectionLimit: 10
})

module.exports = pool
