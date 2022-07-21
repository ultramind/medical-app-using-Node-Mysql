const express = require('express')
const router = express.Router()
const {
  getAllPatients,
  createPatient,
  loginPatient
} = require('../controllers/patients/auth')

router.get('/', getAllPatients)
router.post('/signup', createPatient)
router.post('/signin', loginPatient)

module.exports = router
