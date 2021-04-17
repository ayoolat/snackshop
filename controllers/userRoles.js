const user = require('../models/users');

db = require('../config/database');
userRoles = require('../models/userRoles')

// get a userRole
exports.getAllRoles =async (req, res, next) => {
    const allRoles = await userRoles.findAll()
    .then(userRoles => {
        res.send(allRoles).sendStatus(200)
    })
    .catch(err => {
        res.send(err)
    })
}

exports.addUserRole = (req, res, next) => {
    const {role} = req.body
    const addRole = userRoles.create({role : role})
    .then(userRoles => {
        res.send(addRole).sendStatus(200)
    })
    .catch(userRoles => {
        res.sendStatus(400)
    })
}