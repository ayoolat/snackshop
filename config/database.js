const Sequelize = require('sequelize');
module.exports = new Sequelize('theCakeShop', 'toluwanimi', 'password', {
    host:'localhost',
    dialect:'mysql',
    operatorAliases: false,

    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
});