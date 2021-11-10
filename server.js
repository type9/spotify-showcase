//ENV
const dotenv = require('dotenv');
dotenv.config();

//EXPRESS
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

//DATABASE
require('./data/showcase-db');

//APP
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});