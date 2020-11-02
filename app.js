const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const movieRoutes = require('./routers/movieRoute2')

app.use(morgan('dev'))

// required code to use ejs:
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// use static asset
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', movieRoutes )


const port = 8080
app.listen(port)

