const express = require('express')
const app = express()
const port = 3000

app.get('/keka', (req, res) => {
  res.json({keka: 'lola'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})