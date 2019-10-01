const mongoose = require('mongoose');
const uuidBase62 = require('uuid-base62');

const TripSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuidBase62.v4()
  },
  /* -- Schema Here -- */
  start: {
    date: { type: Date, default: null },
    pickup_address: { type: String, default: null },
    pickup_location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  end: {
    date: { type: Date, default: null },
    pickup_address: { type: String, default: null },
    pickup_location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  country: {
    name: { type: String, default: null }
  },
  city: {
    name: { type: String, default: null }
  },
  passenger: {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null }
  },
  driver: {
    first_name: { type: String, default: null },
    last_name: { type: String, default: null }
  },
  car: {
    plate: { type: String, default: null }
  },
  status: { type: String, default: null },
  tipo: { 
    type: String,
    enum: ['onWay', 'near', 'started'],
    default: 'onWay'
  },
  check_code: { type: String, default: null },
  price: { type: String, default: null },
  driver_location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
  /* -- Relations Here -- */
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const TripModel = mongoose.model('trips', TripSchema, 'trips');

module.exports = TripModel;
