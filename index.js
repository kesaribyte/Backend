const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/github', (reg, res) => {
  res.send('kesribyte')
})

app.get('/instagrm', (req, res)=> {
  res.send('https://www.instagram.com/omraje_shitole_deshmukh?igsi=a21waDVnYB5cnly')
})

app.get('/sanpchat', (req,res)=> {
  res.send('omraje.shtole')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})