require('dotenv').config()
const user = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//staff login
exports.signUp = (req, res, next) => {
    const {email, password, firstname, lastname, role} = req.body
    //crypt password 
    bcrypt.hash(password, 10, async (err, hash) => {
        // if there's an error, send error message
        if (err) { return res.status(500).json({ message: 'There has been an error, please try again' })};

        // if password is hashed, create new user and replace password with has code
        if (hash) {
            const signUpUser = await user.create({
                email : `${email}`,
                firstname : `${firstname}`,
                lastname : `${lastname}`,
                password : `${hash}`, //replace password with hash code
                roleID : `${role}`
            })
            .then(signUpUser => {
                return res.status(200).json({status: 'success', response: req.body});
            })
            .catch(err => {
                return res.status(400).json({status: 'There has been an error', response: err});
            })
        }
    })      
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body
    const loginUser = await user.findAll({
        attributes: ['firstname', 'lastname', 'email', 'password', 'roleID', 'id'],
        where: {
            email: `${email}`
        }
    })
    .then(loginUser => {
        bcrypt.compare(password, loginUser[0].password, (err, valid) => {
            if(!valid){
                {return res.json({message: 'Incorrect password'})}
            }
            if(err){
                return res.status(400).json({error: 'There has been an error'})
            }
            else{
                const token = jwt.sign({
                    data : loginUser
                }, process.env.ACCESS_TOKEN_KEY, {
                    expiresIn: '2h'
                })

                return res.status(200).json({
                    success: loginUser,
                    accessToken : token
                })
            }
        })
    }) 
    .catch(err => {
        return res.status(400).json({status: 'There has been an error', error: err});
    }) 
}