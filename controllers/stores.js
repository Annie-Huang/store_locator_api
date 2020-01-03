const Store = require('../model/Store');

// @desc Get all stores
// @route Get /api/vi/stores
// @access Public
// Interesting, I didn't know export.xx can be get through like xx from require from the other files.
// After you make the following modification,  you will receive in postman:
/*
{
    "success": true,
    "count": 0,
    "data": []
}
 */
// exports.getStores = (req, res, next) => {
//     res.send('Hello');
// };
exports.getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();

        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};


// @desc Create a store
// @route Post /api/vi/stores
// @access Public
exports.addStore = async (req, res, next) => {
    try {
        // Test it by sending a dummy request through postman and you can see the body is log in terminal:
        // { storeId: '0001', address: '10 main st haverhill ma' }
        // console.log(req.body);

        const store = await Store.create(req.body);
        return res.status(200).json({
            success: true,
            data: store
        });

        } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
