import express from 'express'
import dotenv from 'dotenv'

// import routes
import patientsRoutes from './routes/patientsRoutes.js'
import doctorsRoutes from './routes/doctorsRoutes.js'

// initalizing the express
const app = express()
// config the dotenv
dotenv.config()
app.use(express.json())

// routes
app.use('/api/patients/auth', patientsRoutes)
app.use('/api/doctors/auth', doctorsRoutes)

// app listing
app.listen(process.env.PORT, () => {
  console.log('Server up and runing on port: ', process.env.PORT)
})
