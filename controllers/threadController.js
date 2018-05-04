const db = require('../models');

module.exports = {

  // Find all threads
  findAll: (res) => {
      db.Thread.findAll()
      .then(threads => {
        threads.forEach((thread) => {
          console.log(thread.get({ plain: true }));
          res.json(thread.get({ plain: true }));
        })
      })
      .catch(err => console.log(err));
  },

  // Allows user to create new threads
  newThread: (content, subforumId, userId, res) => {
        db.Thread.create({ title: content.title })
        .then(thread => {
          console.log(thread.get({ plain: true }));
          db.User.findById(userId)
            .then(user => user.addThread(thread)
                .then(data => db.Subforum.findById(subforumId)
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
  findAllThreadPosts: (threadId, res) => {
    db.Thread.findOne({
      where: { id: threadId },
      include: [
        {
          model: db.Post,
          include:[db.User]
        }
      ]
    })
      .then(threads => {
        console.log(threads.get({ plain: true }));
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
      .catch(err => console.log(err));
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
