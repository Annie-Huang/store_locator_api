// Copy from https://github.com/nchaulet/node-geocoder

const NodeGeocoder = require('node-geocoder');

const options = {
    // provider: 'google',
    provider: process.env.GEOCODER_PROVIDER,

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
