const db = require('../models');

module.exports = {
    // Finds all subforums in the specified category (i.e. 'Back-end' could show subforums for Node.js, Ruby on Rails, etc..)
    findByCategory: (category, res) => {
        db.Subforum.findAll({ where: { category: category } })
          .then(subforums => {
              console.log(subforums.get({ plain: true }));
              subforums.get({ plain: true });
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
            subforum.get({ plain: true });
        })
        .catch(err => console.log(err));
    }
};