// Copy from https://github.com/nchaulet/node-geocoder

const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Using callback
geocoder.geocode('29 champs elysée paris', function(err, res) {
    console.log(res);
});
