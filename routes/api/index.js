const router = require ('express').Router();
const userRoutes = require('./userAPI');

//user routes
router.use('/api/user', userRoutes);

//post routes
router.use('/api/post', postRoutes);

//thread routes
router.use('/api/thread', threadRoutes);

//subforum routes
router.use('/api/subforum', subforumRoutes);

module.exports = router;