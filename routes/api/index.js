const router = require ('express').Router();
const passport = require('passport');
const auth = require('../../controllers/.auth/auth');
const userRoutes = require('./userAPI');
const postRoutes = require('./postAPI');
const threadRoutes = require('./threadAPI');
const subforumRoutes = require('./subforumAPI');
require('../../controllers/.auth/passport');

//user routes
router.use('/user', passport.authenticate('jwt', {session: false}),userRoutes);

//post routes
router.use('/post', passport.authenticate('jwt', {session: false}), postRoutes);

//thread routes
router.use('/thread', threadRoutes);

//subforum routes
router.use('/subforum', subforumRoutes);

//authenticator
router.post('/auth',auth);

module.exports = router;