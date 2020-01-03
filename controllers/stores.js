// @desc Get all stores
// @route Get /api/vi/stores
// @access Public
// Interesting, I didn't know export.xx can be get through like xx from require from the other files.
exports.getStores = (req, res, next) => {
    res.send('Hello');
};
