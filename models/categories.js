const Sequelize = require('sequelize');
const db = require('../config/database');

const categories = db.define('users', {
    category:{
        type: Sequelize.STRING
    },
})

module.exports = categories