import express from 'express'
import dotenv from 'dotenv'

// initalizing the express
const app = express()
// config the dotenv
dotenv.config()

app.get('/', (req, res) => {
  res.send('Medical app Working...')
})

// app listing
app.listen(process.env.PORT, () => {
  console.log('Server up and runing on port: ', process.env.PORT)
})
