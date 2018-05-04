const router = require ('express').Router();
const userRoutes = require('./userAPI');
const postRoutes = require('./postAPI');
const threadRoutes = require('./threadAPI');
const subforumRoutes = require('./subforumAPI');

//user routes
router.use('/user', userRoutes);

//post routes
router.use('/post', postRoutes);

//thread routes
router.use('/thread', threadRoutes);

//subforum routes
router.use('/subforum', subforumRoutes);

module.exports = router;