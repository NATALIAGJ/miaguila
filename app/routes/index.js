const express = require('express');
 
const app = express.Router();

/* GET index page. */
app.get('/', (req, res) => {
  res.json({
    title: 'Api'
  });
});

// TRIPS 
const TRIPS = require('./TripsRoutes');
app.use('/trips', TRIPS);

module.exports = app;
