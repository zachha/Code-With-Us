const db = require('../models');

module.exports = {

    //finds all the subforums for main feed
    findAll: (req,res) => {
        db.Subforum.findAll({raw:true})
        .then(subforums =>{
            console.log(subforums);
          res.json({subforums:subforums});
        })

    },

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
        db.Subforum.findAll({ where: { category: req.params.category }, raw:true })
          .then(subforums => res.json(subforums))
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
                include: [{model:db.User,attibutes:["username"]}]
            }]
        })
        .then(subforum => {
            console.log(subforum.get({ plain: true }));
            res.json(subforum.get({ plain: true }));
        })
        .catch(err => console.log(err));
    }
};