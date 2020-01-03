const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');


// the location info is copy from https://mongoosejs.com/docs/geojson.html
// 2dsphere supports queries that calculate geometries on an earth-like sphere
const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please add a store ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Store ID must be less than 10 chars']
    },
    address: {
        type: String,
        required: [true, `Please add an address`]
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Geocode & create location
// See MongoDBAtlasII.docx screenshot for the final output.
StoreSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);

    // console.log(loc);
    // You will see this in terminal after you delete the record in Atlas ans re-ingest it through postman
    /*
        MongoDB connected demo-cluster-shard-00-00-4fb1w.mongodb.net
        [
          {
            formattedAddress: '10 Main St, Haverhill, MA 01830-6201, US',
            latitude: 42.774757,
            longitude: -71.076481,
            country: null,
            city: 'Haverhill',
            stateCode: 'MA',
            zipcode: '01830-6201',
            streetName: '10 Main St',
            streetNumber: null,
            countryCode: 'US',
            provider: 'mapquest'
          }
        ]
     */

    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    };

    // Do not save address
    this.address = undefined;

    // Middleware need to call next.
    next();
});

module.exports = mongoose.model('Store', StoreSchema);
