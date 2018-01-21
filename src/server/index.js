var express = require('express');
var app = express();
const path = require('path');

const fileName = 'index.html';
const options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

// ADD THESE TWO LINES
var UserController = require('./Models/User.js');
app.use('/api/login', UserController);

app.use(express.static(__dirname +'./../../')); //serves the index.html

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname +'./../../', 'index.html'))
});



app.listen(3000); //listens on port 3000 -> http://localhost:3000/