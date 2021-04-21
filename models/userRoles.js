const Sequelize = require('sequelize');
const db = require('../config/database');

const roles = db.define('userRoles', {
    Role:{
        type: Sequelize.STRING
    }
})

module.exports = roles