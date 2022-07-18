import express from 'express'
const router = express.Router()
import { getAllPatients, createPatient } from '../../controllers/patients/auth.js'

router.get('/', getAllPatients)
router.post('/', createPatient)

export default router
