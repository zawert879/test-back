const express = require('express')
const app = express()
const port = 3000

app.get('/keka', (req, res) => {
  res.json({keka: 'lola'})
})

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that! BACK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})