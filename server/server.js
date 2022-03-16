const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors");

const routers = require("./controller")
app.use("/neighbourhood", routers)
app.use("http://localhost:3000", routers)

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.status(200);
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowed');
});

module.exports = app
