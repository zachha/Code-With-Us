const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches '/api/user'
router.route('/')
    .get(userController.findAll) // finds all users
    .post(userController.newUser) // creates new User

router.get("/fromtoken",userController.findFromToken);//finds a user from a saved token   

router.route("/:id")
  .get(userController.findUser) // finds specific user
  .put(userController.updatePassword) // updates password
  .put(userController.updateEmail) // updates email
  .put(userController.increaseReputation) // increases specified user's reputation
  .put(userController.decreaseReputation) // decreases specified user's reputation
  .delete(userController.deleteUser); // deletes user    

router.route("/posts/:id")
    .get(userController.findAllPosts) // finds all of a user's posts

router.route("/threads/:id")
    .get(userController.findAllThreads) // finds all of a user's threads

module.exports = router;