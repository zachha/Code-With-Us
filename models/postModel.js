module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        // timestamp added automatically in sequelize
        // creates the 'content' of the post
        text: {
            type: DataTypes.TEXT,
            validate: {
                len: [1, 2000]
            }
        }
    });


    // associates posts with the user that creates them
    // associates posts with the thread they are created in
    Post.associate = models => {
        Post.belongsTo(models.User);
        Post.belongsTo(models.Thread);
    };
    

    return Post;
}