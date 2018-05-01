const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches '/api/user'
router.route('/')
    .get(userController.findAll) // finds all users
    .post(userController.newUser) // creates new User
   

router.route("/:id")
    .get(userController.findUser) // finds specific user
    .get(userController.findAllPosts) // finds all of a user's posts
    .put(userController.updatePassword) // updates password
    .put(userController.updateEmail) // updates email
    .delete(userController.deleteUser); // deletes user    

module.exports = router;