var express = require('express');
var app = express();
const path = require('path');
var user = require('./Models/User');
var bodyParser = require('body-parser');
const router = require('./Routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');

require("./startup/db");

const fileName = 'index.html';
const options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());
app.use('/', router);

app.use(express.static(__dirname +'./../../')); //serves the index.html

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname +'./../../', 'index.html'))
});



app.listen(3000); //listens on port 3000 -> http://localhost:3000/