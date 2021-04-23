const prices = require('../models/pricing');

// get prices of all cakes and number of cakes for each category and price
exports.getCakePrice = async (req, res, next) => {
    const allCakePrices = await prices.findAll({
        attributes : ['id','categoryID', 'sizeID', 'price', 'numberAvailable']
    })
        .then(allCakePrices => {
            return res.status(200).json({status: 'success', response: allCakePrices});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}

// add price to size and category
exports.addASize = async(req, res, next) => {
    const {sizeID, price, numberAvailable, categoryID} = req.body;
    const addPriceDetails = await prices.create({
        sizeID  : `${sizeID}`,
        price : `${price}`,
        numberAvailable : `${numberAvailable}`,
        categoryID : `${categoryID}`
    })
        .then(addPriceDetails => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}

// edit pricing details
exports.editPrice = async (req, res, next) => {
    const {sizeID, price} = req.body;
    const {id} = req.params
    const editPrice = await prices.update({
        sizeID : `${sizeID}`,
        price : `${price}`
    },{
        where: {
            id : `${id}`
        }
    })
        .then(editPrice => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}

// edit number of cakes
exports.editCakeNo = async (req, res, next) => {
    const {numberAvailable} = req.body;
    const {id} = req.params
    const editPrice = await prices.update({
        numberAvailable : `${numberAvailable}`
    },{
        where: {
            id : `${id}`
        }
    })
        .then(editPrice => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}