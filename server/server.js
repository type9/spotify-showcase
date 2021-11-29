//ENV
const dotenv = require('dotenv');
dotenv.config();

//EXPRESS
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

//MIDDLEWARE
// const expressValidator = require('express-validator');
// app.use(expressValidator());

//DATABASE
require('./data/showcase-db');

//CONTROLLERS
require('./controllers/profile.js')(app);

//APP
app.listen(port, () => console.log(`SpotifyShowcase listening on port ${port}`));

module.exports = app;