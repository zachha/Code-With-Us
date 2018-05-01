const router = require('express').Router();
const subforumController = require('../../controllers/subforumController');

router.route('/')
    .get(subforumController.findByCategory); // finds all subforums in specified category

router.route('/:id')
    .get(subforumController.findAllThreads); // finds all threads in the specified subforum