const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./queries/queries')
const app = express()
require('dotenv/config');
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get('/chart/', db.getChartById);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
