const express = require('express')
const path = require('path')
const url = require('url')
const PORT = process.env.PORT || 5000

var app = express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.get('/ta09', (req,res) => res.render('pages/ta09'))
  app.get('/math', (req, res) => {console.log(req.query.num1 + req.query.num2);})
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
