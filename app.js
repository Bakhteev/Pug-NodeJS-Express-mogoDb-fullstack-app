const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, '/views'))
app.listen(4200)
app.use(express.static('public'))

// app.use(express.urlencoded())

app.use(morgan('dev'))

app.get('/', (req, res) => res.status(200).render('index'))

app.get('/gallery', (req, res) => res.status(200).render('gallery'))

app.use((req, res) => res.status(404).render('404'))

console.log('heloo world')
