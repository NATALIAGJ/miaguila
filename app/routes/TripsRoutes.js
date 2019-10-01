const express = require('express')
const querymen = require('querymen')
const TRIPS = express.Router()

const {
  listTrips,
  createBulkTrips,
  createTrip,
  updateTrip,
  countTrips
} = require('../controllers/TripController')

TRIPS.get('/', [
  querymen.middleware({ city: { type: String, paths: ['city.name'] } })
], listTrips)
TRIPS.post('/', createTrip)
TRIPS.post('/_bulk', createBulkTrips)
TRIPS.get('/count', [
  querymen.middleware({ city: { type: String, paths: ['city.name'] } })
], countTrips)
TRIPS.put('/:tripId', updateTrip)

module.exports = TRIPS
