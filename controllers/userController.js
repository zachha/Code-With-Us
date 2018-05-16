const db = require('../models');

module.exports = {
  // function for user to create username and password for user authentication
  newUser: (req, res) => {
    db.User.create({
      email: req.body.email,
      username: req.body.userName,
      password: req.body.password
    })
      .then(user => {
        console.log(user.get({ plain: true }));
        res.json(user.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // allows user to update their password
  updatePassword: (req, res) => {
    db.User.update(
      {
        password: req.body.password
      },
      {
        where: {
          id: req.user.id,
          email: req.user.email
        }
      }
    )
      .then(result =>
        console.log(
          "User: " + req.user.username + "'s password was successfully changed!"
        )
      )
      .catch(err => console.log(err));
  },

  // allows user to update their stored email address
  updateEmail: (req, res) => {
    db.User.update(
      {
        email: req.body.email
      },
      {
        where: {
          id: req.user.id
        }
      }
    )
      .then(result =>
        console.log(
          "User: " + req.user.username + "'s email was successfully changed!"
        )
      )
      .catch(err => console.log(err));
  },

  // finds all users and sorts them by most reputaiton to least
  findAll: (req, res) => {
    db.User.findAll({
      order: [["reputation", "DESC"]],
      raw: true
    })
      .then(users => res.json(users))
      .catch(err => console.log(err));
  },

  //finda a user from a saved token if they previously logged in
  findFromToken: (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id,
        username: req.user.username
      }
    }).then(user => res.json(user));
  },

  // Allows user to find another user by their user name
  findUser: (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: db.Post }, { model: db.Thread }]
    })
      .then(user => {
        console.log(user.get({ plain: true }));
        res.json(user.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // Finds all of a user's posts
  findAllPosts: (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.userId || req.user.id
      },
      include: [
        {
          model: db.Post,
          include: [{ model: db.Thread, attributes: ["title"] }]
        }
      ]
    })
      .then(userPosts => {
        if (userPosts) {
          console.log(userPosts.get({ plain: true }).Posts);
          res.json(userPosts.get({ plain: true }).Posts);
        } else {
          console.log("User has not made any posts");
          res.json("User has not made any posts");
        }
      })
      .catch(err => console.log(err));
  },

  // Finds all of a user's threads
  findAllThreads: (req, res) => {
    db.User.findOne({

      where: {
        id: req.params.userId || req.user.id
      },
      include: [
        {
          model: db.Thread,
          include: [{ model: db.Subforum, attributes: ["category"] }]
        }
      ]
    })
      .then(userThreads => {
        if (userThreads) {
           console.log(userThreads.get({ plain: true }).Threads);
           res.json(userThreads.get({ plain: true }).Threads);
        } else {
          console.log("User has not created any threads!");
          res.json("User has not created any threads");
        }
      })
      .catch(err => console.log(err));
  },

  // Allows users to increase rep of specified user for helpful answers
  increaseReputation: (req, res) => {
    db.User.findById(req.body.userId)
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
  decreaseReputation: (req, res) => {
    db.User.findById(req.body.userId)
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
  deleteUser: (req, res) => {
    db.user
      .findOne({
        where: { id: req.user.id, email: req.user.email }
      })
      .then(user => {
        if (user.isModerator || user.id === req.params.id) {
          db.User.destroy({
            where: {
              id: req.params.id
            }
          })
            .then(user => {
              console.log("User " + user.id + " has been deleted");
              res.send("success!");
            })
            .catch(err => console.log(err));
        } else {
          res.end(res.writeHead(401, { error: "You don't have permission!" }));
        }
      });
  }
};


//module.exports.newUser("zach@email.com", "zach", "password");
//module.exports.newUser("andy@email.com", "andy", "password2");
//module.exports.findUser(1);
