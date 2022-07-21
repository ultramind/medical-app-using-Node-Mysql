const pool = require('../../database/connection.js')

// create and account
const create = (data, callBack) => {
  pool.query(
    `insert into patients (fullname, email, phone, password, updatedAt) values(?,?,?,?,?)`,
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

module.exports = create
