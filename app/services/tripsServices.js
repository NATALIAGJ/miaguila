const { ObjectId } = require('mongodb');
const TripSchema = require('../schemas/TripSchema')

class TripsService {
    constructor () {
        /* */
    }

    async getTrips({ query, select, cursor }) {
        const trips = await TripSchema.find(query, select, cursor);
        return trips || [];
    }

    async getTripsCount({ query }) {
        const trips = await TripSchema.find(query).count();
        return trips || [];
    }

    async getTrip({ tripId }) {
        const trip = await TripSchema.findOne({ _id: ObjectId(tripId) });
        return trip || {};
    }

    async getTripById({ tripId }) {
        const trip = await TripSchema.findOne({ id: tripId });
        return trip || {};
    }

    async getTripByTags({ tags }) {
        const trip = await TripSchema.findOne({ ...tags });
        return trip || {};
    }

    async createTripBulk({ body }) {
        let payload = []
        for (var i = 0, len = body.lista.length; i < len; i++) {
            let trip = body.lista[i]
            let reg = new TripSchema(trip);
            await reg.save();
            payload.push(reg);
        }      
        return payload.length;
    }

    async createTrip({ trip }) {
        const createTrip = await TripSchema.create(trip);        
        return createTrip;
    }

    async updateTrip({ tripId, trip }) {
        const updateTrip = await TripSchema.updateOne({ _id: ObjectId(tripId) }, { $set: trip });
        return updateTrip;
    }

    async deleteTrip({ tripId }) {
        const deletedTrip = await TripSchema.deleteOne({ _id: ObjectId(tripId) });
        return deletedTrip;
    }
}

module.exports = TripsService