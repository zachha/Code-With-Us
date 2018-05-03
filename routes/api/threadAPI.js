const router = require('express').Router();
const threadController = require('../../controllers/threadController');

// Matches '/api/thread'
router.route('/')
    .post(threadController.newThread) // creates a new thread associated with a user and subforum
    .get(threadController.findAll) // finds and returns all threads

router.route('/:id')
    .get(threadController.findAllThreadPosts) // Finds all posts in a specified thread
    .put(threadController.increaseReputation) // Increases the reputation for specified thread
    .put(threadController.decreaseReputation); // Decreases the reputation for the specified thread

module.exports = router;