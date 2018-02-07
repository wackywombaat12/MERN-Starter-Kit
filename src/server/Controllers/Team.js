const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var Team = mongoose.model('Team');
var User = mongoose.model('User');

//All API Routes will need to be declared first
router.get('/test', function (req, res) {
    const data = {
        name: 'Narellan',
        sport: 'Soccer'
    };
    var newTeam = new Team(data);
    newTeam.save(function(err, team) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
          User.findOne({
              email: 'jack.boyle@boylesfitness.com.au'
          }, function (err,user) {
            user.team = newTeam.id;
            user.save(function (err) {
                if (err) {
                    return res.status(400).send({
                        message: err
                    });
                }
                return res.json({
                    message: 'WORKED'
                });
            })
          });
        }
    })
});

router.get('/findme', function (req, res) {
    //return res.json({token: 'test'});
    User.
    findOne({ email: 'jack.boyle@boylesfitness.com.au' }).
    populate('team').
    exec(function (err, user) {
        if (err) return handleError(err);
        return res.json({
            message: user.team
        });
    });
});

module.exports = router