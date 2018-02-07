const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

//All API Routes will need to be declared first
router.post('/register', function (req, res) {
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
        return res.json({
          token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs'),
          user: user.email
        });
      }
  })
});

router.post('/login', function (req, res) {
  //return res.json({token: 'test'});
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({
            token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs'),
            user: user.email
        });
      }
    }
  });
});

// Logout endpoint
router.get('/logout', function (req, res) {
  console.log(req.session);
  req.session.destroy();
  res.clearCookie('auth');
  res.json({message: 'Logged OUT!'});
});

module.exports = router