module.exports = function(sequlize, DataTypes) {
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
    // will be associated to the User who creates post AND possibly other users who 'save' the post
    // belongsToOne thread the post is in
    return Post;
}