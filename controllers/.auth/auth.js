

const express = require('express');
const router  = express.Router();
const jwt      = require('jsonwebtoken');
const passport = require('passport');
require('./passport');
/* POST login. */
module.exports =  function auth (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        
        if (err || !user) {
          console.log('<>-----------------<>'+err+'<>-----------------<>');

            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            console.log("-------"+user.id+"-------")

            const token = jwt.sign(user, 'flubbybunny');
            return res.json({user:user,token: token});
        });
    })
    (req, res);
};

