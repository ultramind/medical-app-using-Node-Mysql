const express = require('express')
const dotenv = require('dotenv')

// const routes
const patientsRoutes = require('./routes/patientsRoutes.js')
const doctorsRoutes = require('./routes/doctorsRoutes.js')

// initalizing the express
const app = express()
// config the dotenv
dotenv.config()
app.use(express.json())

// routes
app.use('/api/patients/auth', patientsRoutes)
app.use('/api/doctors/auth', doctorsRoutes)

app.get('/api', (req, res) => {
  res.json({ message: 'Medical up and runing' })
})

// app listing
app.listen(process.env.PORT, () => {
  console.log('Server up and runing on port: ', process.env.PORT)
})
