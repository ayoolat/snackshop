const Sequelize = require('sequelize');
const db = require('../config/database');

const sizes = db.define('cakeSizes', {
    size:{
        type: Sequelize.SMALLINT
    },
})

module.exports = sizes