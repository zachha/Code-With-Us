const passport    = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

const db = require('../../models');
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, cb) {
        //Assume there is a DB module pproviding a global UserModel
        return db.User.findOne({where:{
            $and:[{password:password},db.Sequelize.where(
                db.Sequelize.fn('lower',db.Sequelize.col('username')),{$like:`%${username}%`})
            ]
        }})
       
    
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect username or password.'});
                }
                return cb(null, user.get({plain:true}), {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'flubbybunny'
    },
    function (jwtPayload, cb) {
        //find the user in db if needed
        console.log(jwtPayload);
        return db.User.findOne({where:{id:jwtPayload.id,username:jwtPayload.username}})
            .then(user => {
                return cb(null, user.get({plain:true}));
            })
            .catch(err => {
                return cb(err);
            });
    }
));