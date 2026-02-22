const express = require('express')
const app = express()

app.use(express.json())

// ROUTER
const authRoutes = require('./routes/auth.routes')

// PREFIX
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

module.exports = app
