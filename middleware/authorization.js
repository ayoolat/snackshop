const users = require('../controllers/users');

const authorization = (role) => {
    return (req, res, next) => {
        const rolePermit = req.loginUser.data[0].roleID
        if (role == rolePermit){
            next()
        }
        else if(rolePermit == 23){
            next()
        }
        else{
            res.status(400).send('unauthorized request')
        }      
    }
}

module.exports = authorization