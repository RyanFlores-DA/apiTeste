const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./controller/controller')
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
    response.json({ info: 'Welcome to Ryan Api' })
})


app.get('/salario/', db.getChartById);
app.get('/priori/', db.getPrioris);
app.post('/v1/priori', db.addPriori);
app.get('/sadeb/', db.getSaxDeb);
app.get('/perfor/', db.getPerfo);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
