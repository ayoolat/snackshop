const cart = require('../models/carts');
const prices = require('../models/pricing');
const total = require('../models/totalPrices')

// get user cart
exports.getMyCart = async (req, res, next) =>{
    const {id} = req.params;

    const getCart = await cart.findAll({
        attributes : ['cakeID, sizeID, price']
    },
    {
        where : {
            id : id
        }
    })
        .then(getCart => {
            return res.status(200).json({status: 'success', response: getCart});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}

// Add cake to cart
exports.addToCart = async (req, res, next) => {
    const {cakeID, sizeID, price} = req.body;
    const {id} = req.params;

    const addOrder = await cart.create({
        cakeID : `${cakeID}`,
        sizeID : `${sizeID}`,
        price : `${price}`
    })
        .then(addOrder => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}

exports.getTotal = async (req, res, next) => {
    const totalPrice = await cart.findAll({
        attributes : ['price']
    },{
        where : {
            id : `${id}`
        }
    })
        .then(totalPrice => {
            const total = 0
            totalPrice.forEach(element => {
                total += element
            });
            return res.status(200).json({status: 'success', response: total});
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        });
}

exports.deleteFromCart = async (req, res, next) => {
    const {id} = req.params;

    const deleteFromCart = await cart.destroy({
        id : `${id}`
    })
    .then(addOrder => {
        return res.status(200).json({status: 'success', response: req.body});
    })
    .catch(err => {
        return res.status(400).json({status: 'There has been an error', response: err});
    });
}