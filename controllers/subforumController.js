const db = require('../models');

module.exports = {
    // Finds all subforums in the specified category (i.e. 'Back-end' could show subforums for Node.js, Ruby on Rails, etc..)
    findByCategory: category => {
        db.Subforum.findAll({ where: { category: category } })
          .then(subforums => subforums.get({ plain: true }))
          .catch(err => console.log(err));
    },

    // Finds all threads for a specified subforum
    findAllThreads: subforumId => {
        db.Subforum.findOne({
            where: {
                id: subforumId
            },
            include: [{
                model: Thread
            }]
        })
        .then(subforum => subforum.get({ plain: true }))
        .catch(err => console.log(err));
    }
};