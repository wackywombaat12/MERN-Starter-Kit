var express = require('express');
var router = express.Router();

//All API Routes will need to be declared first
router.get('/', function (request, response) {
    response.send('Hello World!');
});

module.exports = router;