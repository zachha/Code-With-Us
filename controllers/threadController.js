const db = require('../models');

module.exports = {

  // Find all threads
  findAll: (res) => {
      db.Thread.findAll()
      .then(threads => {
        console.log(threads.get({ plain: true }));
        res.json(threads.get({ plain: true }));
      })
      .catch(err => console.log(err));
  },

  // Allows user to create new threads
  newThread: (content, subforumId, userId) => {
        db.Thread.create({ title: content.title })
        .then(thread => 
            db.User.findById(userId)
            .then(user => user.addThread(post)
                .then(data => db.Subforum.findById(subforumId)
                    .then(subforum => subforum.addThread(post))
                    .catch(err => console.log(err))  
                )
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err));
    },
  // Finds all posts for the associated thread
  findAllThreadPosts: (threadId, res) => {
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
      .then(threads => {
        console.log(threads.get({ plain: true }));
        res.json(threads.get({ plain: true }));
      })
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