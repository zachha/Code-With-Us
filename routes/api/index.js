const router = require ('express').Router();
const userRoutes = require('./userAPI');

//user routes
router.use('/api/user', userRoutes);

module.exports = router;