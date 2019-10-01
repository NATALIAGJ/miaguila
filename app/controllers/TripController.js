const TripsService = require('../services/tripsServices');

const tripService = new TripsService();

/**
 *  
 * List and page Trips
 * 
 * 
 * @method GET
 */

exports.listTrips = async function(req, res, next) {
    try {
        const { query, select, cursor } = req.querymen;
        const trips = await tripService.getTrips({ query, select, cursor });
        res.status(200).json({
            data: trips,
            message: 'trips listados'
        }); 
    } catch (error) {
        next(error);
    }
};

/**
 *  
 * Count Trips by city
 * 
 * 
 * @method GET
 */
exports.countTrips = async function(req, res, next) {
    try {
        const { query } = req.querymen;
        const trips = await tripService.getTripsCount({ query });
        res.status(200).json({
            count: trips,
            message: 'Count listados'
        }); 
    } catch (error) {
        next(error);
    }
};

/**
 *  
 * Create bulk of trips
 * 
 * 
 * @method POST
 */

exports.createBulkTrips = async function(req, res, next) {
    try {
        let { body } = req
        const trips = await tripService.createTripBulk({ body });
        res.status(200).json({
            data: trips,
            message: 'trips guardados'
        });
    } catch (error) {
        next(error);
    }
};

/**
 *  
 * Create trip
 * 
 * 
 * @method POST
 * @body
 */

exports.createTrip = async function(req, res, next) {
    try {
        const { body: trip } = req;
        const createTrip = await tripService.createTrip({ trip });
        res.status(200).json({
            data: createTrip,
            message: 'trip creado'
        })
    } catch (error) {
        next(error)
    }
};

/**
 *  
 * Update trip
 * 
 * 
 * @method PUT
 */

exports.updateTrip = async function(req, res, next) {
    try {
        const { tripId } = req.params;
        const { body: trip } = req;
        const updateTrip = await tripService.updateTrip({ tripId, trip });
        res.status(200).json({
            data: updateTrip,
            message: 'trips actualizado'
        })
    } catch (error) {
        next(error);
    }
};