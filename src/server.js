const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9001

const limiter = require('express-rate-limit')

app.use(limiter({
  windowMs: 5000,
  max: 8,
  message: {
    code: 429,
    message: 'Too many request'
  }
}))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { // get method
  res.json({
    code: 200,
    message: 'Hello World'
  })
  res.status(200).send('Success')
})

app.post('/', (req, res) => { // POST request submitted at root page
  console.log('request received at URL of root')
  console.log(req.body)
  res.send('data received')
})

app.listen(PORT)
