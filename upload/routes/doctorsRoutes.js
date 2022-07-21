const express = require('express')
const router = express.Router()
const {
  getAllDoctors,
  createDoctors,
  loginDoctor
} = require('../controllers/Doctors/auth.js')

router.get('/', getAllDoctors)
router.post('/signup', createDoctors)
router.post('/signin', loginDoctor)

module.exports = router
