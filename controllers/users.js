db = require('../config/database');
users = require('../models/users')

exports.allUsers = (req, res, next) => {
    users.findAll()
        .then(users => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
};


