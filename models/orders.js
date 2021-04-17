    const Sequelize = require('sequelize');
    const db = require('../config/database');

    const orders = db.define('users', {
        userId:{
            type: Sequelize.INTEGER
        },
        cakeId:{
            type: Sequelize.INTEGER
        },
        paymentId:{
            type: Sequelize.TINYINT
        },
        paymentCompleted:{
            type: Sequelize.TINYINT
        },
        orderStatus:{
            type: Sequelize.INTEGER
        },
        amountPaid:{
            type: Sequelize.INTEGER
        }
    })

    module.exports = orders