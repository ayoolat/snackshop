const Sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('users', {
    roleID:{
        type: Sequelize.INTEGER
    },
    Name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    }
})

module.exports = user