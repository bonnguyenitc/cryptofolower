const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;



const User = require('../model/User');

route.get('/', (req, res) => {
    res.render('index');
});

route.post('/logup', (req, res) => {
    var newUser = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password
    };
    new User(newUser).save().then(user => {
        res.send(user);
    }); 
});

route.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    passport.use(new LocalStrategy(
        function(email, password, done) {
          User.findOne({ email: email }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      ));
});



module.exports = route;