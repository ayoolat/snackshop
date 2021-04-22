const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser =require('body-parser');
const path = require('path');

const db = require('./config/database')
// test db
db.authenticate()
    .then(()=>console.log('db connected'))
    .catch(err=>console.log('Error : ' + err))

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/', require('./routes/signUpAndLogin'));
app.use('/users', require('./routes/users'));
app.use('/admin', require('./routes/userRoles'));
app.use('/categories', require('./routes/categories'));
app.use('/size', require('./routes/sizes'));

const PORT = process.env.PORT||5000

app.listen(PORT, console.log(`Server is listening on port ${PORT}`))