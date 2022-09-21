const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const db = require('./dbConnection');
const jwt = require('jsonwebtoken');
const auth = require('./auth');

db.connectdb();
const app = express();
app.use(bodyParser.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000,()=>{
    console.log('server started');
});