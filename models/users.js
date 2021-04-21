const Sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('users', {
    roleID:{
        type: Sequelize.INTEGER
    },
    firstname:{
        type: Sequelize.STRING
    },
    lastname:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    }
})

module.exports = user