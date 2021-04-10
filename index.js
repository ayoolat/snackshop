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

// routes
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT||5000

app.listen(PORT, console.log(`Server is listening on port ${PORT}`))