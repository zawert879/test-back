const express = require('express')
const app = express()
const port = 3000

app.get('/keka', (req, res) => {
  res.json({keka: 'lola'})
})

app.get('/api/keka', (req, res) => {
  res.json({keka: 'lolaKek'})
})

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that! BACK' + JSON.stringify(req));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})