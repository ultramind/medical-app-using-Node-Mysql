import pool from '../../database/connection.js'

// create and account
export const create = (data, callBack) => {
  pool.query(
    `insert into doctors (fullname, email, phone, password, updatedAt) values(?,?,?,?,?)`,
    [data.fullname, data.email, data.phone, data.password, data.updatedAt],
    (err, result) => {
      if (err) {
        return callBack(err)
      } else {
        return callBack(null, result)
      }
    }
  )
}
