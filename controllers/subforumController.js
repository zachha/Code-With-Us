const db = require('../models');

module.exports = {

    // Allows Moderator to create a new subforum
    createSubforum: (category, res) => {
        db.Subforum.create({
            category: category
        })
        .then(subforum => {
        console.log(subforum.get({ plain: true }));
        res.json(subforum.get({ plain: true }));
      })
      .catch(err => console.log(err));
    },

    // Finds all subforums in the specified category (i.e. 'Back-end' could show subforums for Node.js, Ruby on Rails, etc..)
    findByCategory: (category, res) => {
        db.Subforum.findAll({ where: { category: category } })
          .then(subforums => {
              console.log(subforums.get({ plain: true }));
              res.json(subforums.get({ plain: true }));
          })
          .catch(err => console.log(err));
    },

    // Finds all threads for a specified subforum
    findAllThreads: (subforumId, res) => {
        db.Subforum.findOne({
            where: {
                id: subforumId
            },
            include: [{
                model: Thread
            }]
        })
        .then(subforum => {
            console.log(subforum.get({ plain: true }));
            res.json(subforum.get({ plain: true }));
        })
        .catch(err => console.log(err));
    }
};

module.exports.createSubforum("Javascript");