const Sequelize = require('sequelize');
const db = require('../config/database');

const prices = db.define('cakePricings', {
    categoryID:{
        type: Sequelize.INTEGER
    },
    sizeID:{
        type: Sequelize.INTEGER
    },
    price:{
        type: Sequelize.INTEGER
    },
    numberAvailable:{
        type: Sequelize.INTEGER
    }
})

module.exports = prices