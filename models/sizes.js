const Sequelize = require('sequelize');
const db = require('../config/database');

const sizes = db.define('users', {
    size:{
        type: Sequelize.SMALLINT
    },
})

module.exports = sizes