const user = require('../models/users');

db = require('../config/database');
users = require('../models/users')

// find all users(admin and internal only)
exports.allUsers = async (req, res, next) => {
    const allUsers = await users.findAll()
        .then(users => {
            res.sendStatus(200).send(this.allUsers);
        })
        .catch(err => console.log(err));
};

// add new user
exports.addUser =async (req, res, next) => {
    const {firstName, lastName, role} = req.body
    const newUser = await users.create({firstName: firstName, lastName: lastName, role:role})
        .then(users => {
            res.sendStatus(200);
        })
        .catch(err => res.sendStatus(400))
}

// edit user details
exports.editUser =async (req, res, next) => {
    const {firstName, lastName, id} = req.body
    const findUser = await users.update({firstName: firstName, lastName: lastName}, {
        where: {
            userId: id
        }
    })
    .then(users => {
        res.sendStatus(200)
    })
    .catch(err => res.sendStatus(400))
}

// find a user
exports.findAUser =async (req, res, next) => {
    const {firstName, lastName, id} = req.body
    const findUser = await user.findAll({
        id: id,
        firstName: firstName,
        lastName: lastName
    })
    .then(users => {
        res.sendStatus(200).send(findUser)
    })
    .catch(err => {
        res.sendStatus(400)
    })
}
