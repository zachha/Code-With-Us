const db = require('../models');

module.exports = {

  // Find all threads
  findAll: () => {
      db.Thread.findAll()
      .then(threads => threads.get({ plain: true }))
      .catch(err => console.log(err));
  },

  // Finds all posts for the associated thread
  findAllThreadPosts: threadId => {
    db.Thread.findAll({
      where: { id: threadId },
      include: [
        {
          model: Post,
          /*
          where: {
            threadId: threadId
          }
          */
        }
      ]
    })
      .then(threads => threads.get({ plain: true }))
      .catch(err => console.log(err));
  },

  // Allows users to increase rep of threads they think are interesting
  increaseReputation: threadId => {
      db.Thread.findById(threadId)
      .then(thread => 
         thread.increment({
            reputation: 1
        })
      )
      .then(thread => console.log("thread has been updated"))
      .catch(err => console.log(err));
  },

  // Allows users to decrease rep of threads they think are not interesting
  decreaseReputation: threadId => {
      db.Thread.findById(threadId)
      .then(thread => 
         thread.decrement({
            reputation: 1
        })
      )
      .then(thread => console.log("thread has been updated"))
      .catch(err => console.log(err));
  }

};