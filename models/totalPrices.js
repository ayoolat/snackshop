const Sequelize = require('sequelize');
const db = require('../config/database');

const carts = db.define('totalCost', {
    userId:{
        type: Sequelize.INTEGER
    },
    totalPrice:{
        type: Sequelize.INTEGER
    }
})

module.exports = carts