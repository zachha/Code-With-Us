const router = require('express').Router();
const subforumController = require('../../controllers/subforumController');

// Matches '/api/subforum'
router.route('/:?category')
    .get(subforumController.findByCategory) // finds all subforums in specified category
    .post(subforumController.createSubforum); // Allows Moderator to create a new Subforum

router.route('/:id')
    .get(subforumController.findAllThreads); // finds all threads in the specified subforum

module.exports = router;