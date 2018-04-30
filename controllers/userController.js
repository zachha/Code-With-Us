const db = require('../models');

module.exports = {
  // function for user to create username and password for user authentication
  newUser: (email, userName, password) => {
    db.User.create({
      email: email,
      user_name: userName,
      password: password
    })
      .then(data => console.log(data.dataValues))
      .catch(err => console.log(err));
  },

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

  findAll: () => {
    db.User.findAll({
      order: [["reputation", "DESC"]]
    })
      .then(users => console.log(users))
      .catch(err => console.log(err));
  },

  // Allows user to find another user by their user name
  findUser: userId => {
    db.User.findOne({
      where: {
        id: userId
      },
      include: [
        {
          model: models.Posts
        }
      ]
    })
      .then(user => user.get({ plain: true }))
      .catch(err => console.log(err));
  },

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