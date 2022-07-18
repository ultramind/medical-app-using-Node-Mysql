import express from 'express'
import dotenv from 'dotenv'

// import routes
import patientRoutes from './routes/patients/patientsRoutes.js'

// initalizing the express
const app = express()
// config the dotenv
dotenv.config()
app.use(express.json())

app.use('/api/patients/auth', patientRoutes)
// app listing
app.listen(process.env.PORT, () => {
  console.log('Server up and runing on port: ', process.env.PORT)
})
