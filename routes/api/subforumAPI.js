const router = require('express').Router();
const subforumController = require('../../controllers/subforumController');

// Matches '/api/subforum'
router.route('/')
    .get(subforumController.findByCategory); // finds all subforums in specified category

router.route('/:id')
    .get(subforumController.findAllThreads); // finds all threads in the specified subforum

module.exports = router;