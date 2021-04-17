const Sequelize = require('sequelize');
const db = require('../config/database');

const roles = db.define('userROles', {
    Role:{
        type: Sequelize.INTEGER
    }
})

module.exports = roles