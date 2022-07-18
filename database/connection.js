import { createPool } from 'mysql'

// creating
const pool = createPool({
  port: 3306,
  host: localhost,
  user: 'root',
  password: '',
  database: 'medical-app-dp',
  connectionLimit: 10
})
export default pool
