const Sequelize = require('sequelize');
const db = require('../config/database');

const carts = db.define('cart', {
    userId:{
        type: Sequelize.INTEGER
    },
    sizeID:{
        type: Sequelize.INTEGER
    },
    price:{
        type: Sequelize.INTEGER
    }
})

module.exports = carts