const router = require('express').Router();
const postController = require('../../controllers/postController');

// matches '/api/post'
router.route('/')
    .post(postController.newPost) // allows users to create new posts
    .put(postController.editPost); // allows user/mod to edit the specified post


router.route('/:id')
    .get(postController.findOnePost) // can be used to quote specified post
    .delete(postController.deletePost); // deletes the specified post



module.exports = router;