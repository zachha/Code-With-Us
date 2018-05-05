const db = require('../models');

module.exports = {

  // Find all threads
  findAll: (req,res) => {
      db.Thread.findAll({raw:true})
      .then(threads => res.json(threads))
      .catch(err => console.log(err));
  },

  // Allows user to create new threads
  newThread: (req , res) => {
        db.Thread.create({ title: req.body.title })
        .then(thread => {
          console.log(thread.get({ plain: true }));
          db.User.findById(req.body.userId)
            .then(user => user.addThread(thread)
                .then(data => db.Subforum.findById(req.body.subforumId)
                    .then(subforum => {
                      subforum.addThread(thread)
                      res.json(thread.get({ plain: true }))
                    })
                    .catch(err => console.log(err))  
                )
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
    },
  // Finds all posts for the associated thread
  findAllThreadPosts: (req, res) => {
    console.log(req.params.id);
    db.Thread.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.Post,
          include:[{model:db.User,attributes:["username"]}]
        }
      ]
    })
      .then(threads => {
        //console.log(threads.get({ plain: true }));
        res.json(threads.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // Allows users to increase rep of threads they think are interesting
  increaseReputation: (threadId, res) => {
      db.Thread.findById(threadId)
      .then(thread => 
         thread.increment({
            reputation: 1
        })
      )
      .then(thread => {
        console.log("thread has been updated");
        res.json(thread.get({ plain: true }))
      })
      .catch(err => console.log(err,"ERROR"));
  },

  // Allows users to decrease rep of threads that don't contribute or break the forum rules
  decreaseReputation: (threadId, res) => {
      db.Thread.findById(threadId)
      .then(thread => 
         thread.decrement({
            reputation: 1
        })
      )
      .then(thread => {
        console.log("thread has been updated");
        res.json(thread.get({ plain: true }));
      })
      .catch(err => console.log(err));
  }

};
