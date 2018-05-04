const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

//API Routes
router.use('/api', apiRoutes);

// if no API routes, send to React app


module.exports = router;