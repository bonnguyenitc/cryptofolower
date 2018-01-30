const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// DB CONFIG
require('./config/db');

const app = express();

const index = require('./route/index');
const pull = require('./route/pull');

var port = process.env.PORT || 3000;


app.set('view engine','ejs');

app.use("/public",express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/', index);
app.use('/pull', pull);

app.listen(port, (req, res) => {
    console.log("tao đang chạy");
});