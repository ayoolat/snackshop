const Sequelize = require('sequelize');
const db = require('../config/database');

const categories = db.define('availabecakes', {
    category:{
        type: Sequelize.STRING
    },
})

module.exports = categories