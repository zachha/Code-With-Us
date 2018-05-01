const db = require('../models');

module.exports = {
    // Creates a new post inside the associated thread, updates user's postcount and thread's postcount
    newPost: (content, threadId) => {
        db.Post.create({ text: text })
          .then(post => 
            db.Thread.findById(threadId)
            .then(thread => thread.addPosts(post)
                .then(thread => {
                    console.log("new post created in thread")
                    thread.increment({ postCount: 1})
                    .get({ plain: true});
                })
                .then(data => db.User.findById(userId)
                    .then(user => user.increment({ postCount: 1}))
                )
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err));
    },

    // Finds a specific post by id (can be used to quote specific posts)
    findOnePost: (postId) => {
        db.Post.findOne({
            where: {
                id: postId
            }
        })
        .then(user => user.get({ plain: true }))
        .catch(err => console.log(err));
    },

    // Allows user or mod to update/edit a post
    editPost: (content, postId) => {
        db.Post.update({ text: content }, { where: { id: postId } })
          .then(post => console.log("Post updated!"))
          .catch(err => console.log(err));
    },

    // Allows user or mod to delete a post
    deletePost: (postid) => {
        db.Post.destroy({ where: { id: id } })
          .then(user => console.log("Post has been deleted"))
          .catch(err => console.log(err));
    }
}