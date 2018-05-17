const db = require('../models');

module.exports = {
    // Creates a new post inside the associated thread, updates user's postcount and thread's postcount
    newPost: (req, res) => {
        console.log(req.body);
        db.Post.create({ text: req.body.text })
        .then(post => 
            db.Thread.findById(req.body.threadId)
            .then(thread => thread.addPosts(post)
                .then(thread => {
                    console.log("new post created in thread")
                    console.log(post.get({ plain: true }))
                    thread.increment({ postCount: 1})
                })
                .then(data => db.User.findById(req.user.id)
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
    findOnePost: (req, res) => {
        db.Post.findOne({
            where: {
                id: req.params.postId
            }
        })
        .then(user => {
            console.log(user.get({ plain: true }));
            res.json(user.get({ plain: true }));
        })
        .catch(err => console.log(err));
    },

    // Allows user or mod to update/edit a post
    editPost: (req , res) => {
        db.Post.update({ text: req.body.text }, {
             where: { 
                 id: req.body.id,
                 UserId: req.user.id           
                } 
        })
        .then(post => {
              res.end(res.writeHead(200,"Post updated!"))
              console.log("Post updated!");
        })
        .catch(err => res.end(res.writeHead(400, "Credentials Mismatch")));
    },

    // Allows user or mod to delete a post
    deletePost: (req,res) => {
        console.log(req.params.id);
        console.log(req.user.id);
        db.Post.findOne({ where: { id: req.params.id,UserId:req.user.id } })
          .then(post => {
            return db.Post.destroy({where:{ id: post.id }})
            .then(() =>
                db.Thread.findById(post.ThreadId)
                .then(thread => thread.removePost(req.params.id)
                   .then(() => {thread.increment({ postCount: -1})})
                )  
                .then(res.status(200).json({message:`deleted post: ${req.params.id} `}))
            )
        })          
        .catch(err => console.log(err));
    }
}