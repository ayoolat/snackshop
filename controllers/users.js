const users = require('../models/users');
db = require('../config/database');

// find all users(admin and internal only)
exports.allUsers = async (req, res, next) => {
    const allUsers = await users.findAll()
        .then(allUsers => {
            return res.status(200).json({status: 'success', response: allUsers});
        })
        .catch(err => {
            return res.status(400).send(err);
        });
};

// add new user
exports.addUser =async (req, res, next) => {
    const {firstname, lastname, roleID, email} = req.body
    const newUser = await users.create({firstname: `${firstname}`, lastname: `${lastname}`, roleID:`${roleID}`, Email: `${email}`})
        .then(newUser => {
            return res.status(200).json({status: 'success', response: req.body});
        })
        .catch(err => {
            return res.status(400).send(err);
        })
}

// edit user details
exports.editUser =async (req, res, next) => {
    const {firstname, lastname, email} = req.body
    const {id} = req.params
    const findUser = await users.update({
            firstname: `${firstname}`,
            lastname: `${lastname}`,
            email: `${email}`
        }, 
        {
            where: {
                id: `${id}`
            }
    })
    .then(findUser => {
        return res.status(200).json({status: 'success', response: req.body});
    })
    .catch(err => {
        return res.status(400).send(err);
    })
}

// find a user
exports.findAUser =async (req, res, next) => {
    const {id} = req.params
    const findUser = await user.findAll({
        attributes: ['firstname', 'lastname', 'email'],
        where: {
            id: id
        }
    })
    .then(findUser => {
        return res.status(200).json({status: 'success', response: findUser});
    })
    .catch(err => {
        return res.status(400).send(err);
    })
}
