const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
var cors = require('cors');
//var bodyParser = require('body-parser');
const app = express();

dotenv.config({ path: './config.env'});
require('./db/conn');
//const User = require('./model/UserScema');

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//link of router files
app.use('/', require('./router/auth'));
//app.use('/prop', require('./router/prop'));

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello from Server');
});

app.get('/register', (req, res) => {
    res.send('Hello from Register');
});

app.get('/login', (req, res) => {
    res.send('Hello from login');
});

app.listen(port, () => {
    console.log("Server is running at " + port);
});
