import express from 'express'
const router = express.Router()
import {
  getAllPatients,
  createPatient,
  loginPatient
} from '../../controllers/patients/auth.js'

router.get('/', getAllPatients)
router.post('/signup', createPatient)
router.post('/signin', loginPatient)

export default router
