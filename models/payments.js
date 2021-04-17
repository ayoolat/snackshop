const Sequelize = require('sequelize');
const db = require('../config/database');

const payments = db.define('users', {
    referenceID:{
        type: Sequelize.INTEGER
    },
    status:{
        type: Sequelize.INTEGER
    }
})

module.exports = payments