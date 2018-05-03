const db = require('../models');

module.exports = {
    // Creates a new post inside the associated thread, updates user's postcount and thread's postcount
    newPost: (content, threadId, userId, res) => {
        db.Post.create({ text: content.text })
        .then(post => 
            db.Thread.findById(threadId)
            .then(thread => thread.addPosts(post)
                .then(thread => {
                    console.log("new post created in thread")
                    console.log(post.get({ plain: true }))
                    thread.increment({ postCount: 1})
                })
                .then(data => db.User.findById(userId)
                    .then(user => user.addPosts(post)
                        .then(user => {
                            user.increment({ postCount: 1})
                            res.json(post.get({ plain: true}));
                        })
                        .catch(err => console.log(err))
                    )
                    .catch(err => console.log(err))  
                )
                .catch(err => console.log(err))
            )
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err));
    },

    // Finds a specific post by id (can be used to quote specific posts)
    findOnePost: (postId, res) => {
        db.Post.findOne({
            where: {
                id: postId
            }
        })
        .then(user => {
            console.log(user.get({ plain: true }));
            res.json(user.get({ plain: true }));
        })
        .catch(err => console.log(err));
    },

    // Allows user or mod to update/edit a post
    editPost: (content, postId, res) => {
        db.Post.update({ text: content.text }, { where: { id: postId } })
          .then(post => {
              console.log("Post updated!");
          })
          .catch(err => console.log(err));
    },

    // Allows user or mod to delete a post
    deletePost: (postid) => {
        db.Post.destroy({ where: { id: postid } })
          .then(user => console.log("Post has been deleted"))
          .catch(err => console.log(err));
    }
}


let newObj = { text: "THIRD POST"};
module.exports.newPost(newObj, 1, 1);