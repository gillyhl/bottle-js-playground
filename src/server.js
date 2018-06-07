const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.static(path.join(__dirname, 'static')))
routes(app)

app.listen(3000, () => console.log('Don\'t Bottle It - port 3000!'))