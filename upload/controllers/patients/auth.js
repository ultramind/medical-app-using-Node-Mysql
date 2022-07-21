const { findMany, findOneByAug, generateToken } = require('../utils.js')
const { create } = require('../../models/patients/auth.js')
const { genSaltSync, hashSync, compareSync, compare } = require('bcrypt')

// signup controller
const createPatient = (req, res) => {
  const body = req.body
  // checking for duplicate patients
  const data = {
    tableName: 'patients',
    colum: 'email',
    value: body.email
  }
  findOneByAug(data, (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        success: 0,
        message: 'Database error!'
      })
    }
    if (result[0]) {
      return res.status(401).json({
        success: 0,
        message: 'Email is already in use'
      })
    }

    if (!result[0]) {
      const salt = genSaltSync(10)
      body.password = hashSync(body.password, salt)
      body.updatedAt = Date.now()
      create(body, (err, callback) => {
        if (err) {
          console.log(err)
          return res.status(401).json({
            success: 0,
            message: 'Database connection error!'
          })
        }
        return res.status(201).json({
          success: 1,
          message: 'Registration successful'
        })
      })
    }
  })
}
// signup controller

const loginPatient = (req, res) => {
  const body = req.body
  // checking for duplicate patients
  const data = {
    tableName: 'patients',
    colum: 'email',
    value: body.email
  }
  findOneByAug(data, (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        success: 0,
        message: 'Database error!'
      })
    }
    if (!result[0]) {
      console.log(result[0])
      return res.status(401).json({
        success: 0,
        message: 'Invalid email and password!'
      })
    }
    result = result[0]
    var verify = compareSync(body.password, result.password)
    if (!verify) {
      return res.status(401).json({
        success: 0,
        message: 'Invalid email and password!'
      })
    }
    // generating jwt token
    const token = generateToken(result)
    return res.status(200).json({
      success: 1,
      message: 'Login successful!',
      token
    })
  })
}

const getAllPatients = (req, res) => {
  const info = {
    tableName: 'patients'
  }
  findMany(info, (err, results) => {
    if (err) {
      console.log(err)
      return res.status(404).json({
        success: 0,
        message: 'Database error!'
      })
    }
    if (!results) {
      console.log(err)
      return res.status(404).json({
        success: 0,
        message: 'No records found'
      })
    }
    return res.status(200).json({
      success: 1,
      data: results
    })
  })
}

module.exports = {
  createPatient,
  loginPatient,
  getAllPatients
}
