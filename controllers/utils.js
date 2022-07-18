import pool from '../database/connection.js'

export const findOneById = ({ tableName, _id }, callBack) => {
  pool.query(
    `select * from ${data.tableName} where _id=?`,
    [_id],
    (err, result, fields) => {
      if (err) {
        console.log(err)
        return callBack(err)
      }
      return callBack(null, result)
    }
  )
}

export const findOneByAug = ({ tableName, colum, value }, callBack) => {
  pool.query(
    `select * from ${tableName} where ${colum}=?`,
    [value],
    (err, result, fields) => {
      if (err) {
        console.log(err)
        return callBack(err)
      }
      return callBack(null, result)
    }
  )
}
// fetch many
export const findMany = ({ tableName }, callBack) => {
  pool.query(`select * from ${tableName}`, [], (err, result, fields) => {
    if (err) {
      console.log(err)
      return callBack(err)
    }
    return callBack(null, result)
  })
}
