const db = require('../models');

module.exports = {

    // Allows Moderator to create a new subforum
    createSubforum: (req, res) => {
        db.Subforum.create({
            category: req.body.category
        })
        .then(subforum => {
        console.log(subforum.get({ plain: true }));
        res.json(subforum.get({ plain: true }));
      })
      .catch(err => console.log(err));
    },

    // Finds all subforums in the specified category (i.e. 'Back-end' could show subforums for Node.js, Ruby on Rails, etc..)
    findByCategory: (req, res) => {
        db.Subforum.findAll({ where: { category: req.params.category } })
          .then(subforums => {
              subforums.forEach((subforum) => {
                console.log(subforums.get({ plain: true }));
                res.json(subforums.get({ plain: true }));
              })
          })
          .catch(err => console.log(err));
    },

    // Finds all threads for a specified subforum
    findAllThreads: (req, res) => {
        db.Subforum.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Thread,
                include: [db.User]
            }]
        })
        .then(subforum => {
            console.log(subforum.get({ plain: true }));
            res.json(subforum.get({ plain: true }));
        })
        .catch(err => console.log(err));
    }
};