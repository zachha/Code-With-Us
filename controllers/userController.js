const db = require('../models');

module.exports = {

  // function for user to create username and password for user authentication
  newUser: (email, userName, password, res) => {
    db.User.create({
      email: email,
      username: userName,
      password: password
    })
      .then(user => {
        console.log(user.get({ plain: true }));
        res.json(user.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // allows user to update their password
  updatePassword: (userId, password) => {
    db.User.update(
      {
        password: password
      },
      {
        where: {
          id: userId
        }
      }
    )
      .then(result =>
        console.log("User: " + userId + "'s password was successfully changed!")
      )
      .catch(err => console.log(err));
  },

  // allows user to update their stored email address
  updateEmail: (userId, email) => {
    db.User.update(
      {
        email: email
      },
      {
        where: {
          id: userId
        }
      }
    )
      .then(result =>
        console.log("User: " + userId + "'s email was successfully changed!")
      )
      .catch(err => console.log(err));
  },

  // finds all users and sorts them by most reputaiton to least
  findAll: (res) => {
    db.User.findAll({
      order: [["reputation", "DESC"]]
    })
      .then(users => {
        users.forEach((user) => {
          console.log(user.get({ plain: true }));
          res.json(user.get({ plain: true }));
        })
      })
      .catch(err => console.log(err));
  },

  // Allows user to find another user by their user name
  findUser: (userId, res) => {
    db.User.findOne({
      where: {
        id: userId
      },
      include: [
        { model: db.Post },
        { model: db.Thread }
      ]
    })
      .then(user => {
        console.log(user.get({ plain: true }));
        res.json(user.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // Finds all of a user's posts
  findAllPosts: (userId, res) => {
      db.User.findAll({
        where: {
          id: userId
        },
        include: [
          {
            model: db.Post
          }
        ]
      })
        .then(userPosts => {
            console.log((userPosts.get({ plain: true })).Posts);
            res.json((userPosts.get({ plain: true })).Posts);
      })
        .catch(err => console.log(err));
  },

    // Allows users to increase rep of specified user for helpful answers
  increaseReputation: (userId, res) => {
      db.User.findById(userId)
      .then(user => 
         user.increment({
            reputation: 1
        })
      )
      .then(user => {
        console.log("user has been updated");
        res.json(user.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // Allows users to decrease rep of other users 
  decreaseReputation: (userId, res) => {
      db.User.findById(userId)
      .then(user => 
         user.decrement({
            reputation: 1
        })
      )
      .then(user => {
        console.log("user has been updated");
        res.json(user.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },      

  // allows a mod or the specified user to delete their information
  deleteUser: userId => {
      db.User.destroy({
          where: {
              id: userId
          }
      })
      .then(user => console.log('User has been deleted'))
      .catch(err => console.log(err));
  }
};


//module.exports.newUser("zach@email.com", "zach", "password");
//module.exports.newUser("andy@email.com", "andy", "password2");
module.exports.findUser(1);

