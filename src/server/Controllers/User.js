const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

//All API Routes will need to be declared first
router.post('/', function (req, res) {
    var body = req.body;
    console.log(body);
    var newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(body.password, 10);
    newUser.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        user.hash_password = undefined;
        return res.json(user);
      }
  })
});

module.exports = router;