import express from 'express'
const router = express.Router()
import {
  getAllDoctors,
  createDoctors,
  loginDoctor
} from '../controllers/Doctors/auth.js'

router.get('/', getAllDoctors)
router.post('/signup', createDoctors)
router.post('/signin', loginDoctor)

export default router
