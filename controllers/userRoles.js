db = require('../config/database');
userRoles = require('../models/userRoles')

// get a userRole
exports.getAllRoles =async (req, res, next) => {
    const allRoles = await userRoles.findAll({
        attributes: ['Role', 'Id']
    })
    .then(allRoles => {
        return res.status(200).json({status: 'success', response: allRoles})
    })
    .catch(err => {
        return res.send(err)
    })
}

// add a new role
exports.addUserRole = async (req, res, next) => {
    const {role} = req.body
    const addRole = await userRoles.create({Role : `${role}`})
    .then(addRole => {
        console.log(role)
        return res.status(200).json({status: 'success', response: req.body})
    })
    .catch(err => {
        return res.status(400).send(err)
    })
}

// delete a role
exports.deleteUser = async (erq, res, next) => {
    const {role} = req.body
    const deleteRole = await userRoles.destroy({
        Role : `${role}`
    })
    .then(deleteRole => {
        return res.status(200).json({status: 'role deleted', response: req.body})
    })
    .catch(err => {
        return res.status(400).send(err)
    })
}