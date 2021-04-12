const user = require('../models/users');

db = require('../config/database');
users = require('../models/users')

// find all users(admin and internal only)
exports.allUsers = (req, res, next) => {
    users.findAll()
        .then(users => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
};

// add new user
exports.addUser = (req, res, next) => {
    const {firstName, lastName, role} = req.body
    newUser = await users.create({firstName: firstName, lastName: lastName, role:role})
        .then(users => {
            res.sendStatus(200);
        })
        .catch(err => res.sendStatus(400))
}

// edit user details
exports.editUser = (req, res, next) => {
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
exports.findAUser = (req, res, next) => {
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
