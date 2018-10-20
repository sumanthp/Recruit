
const express = require('express');
const bodyparser = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

const mongoUrl = 'mongodb://localhost:/27017';
mongoose.connect(mongoUrl);

const port=27017;

app.listen(port);

console.log(`Server is running on port: $ {port}`);


