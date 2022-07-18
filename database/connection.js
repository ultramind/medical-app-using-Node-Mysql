import { createPool } from 'mysql'

// creating
const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'medical-app-db',
  connectionLimit: 10
})
export default pool
