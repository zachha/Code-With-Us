module.exports = function(sequelize, DataTypes) {
    const Thread = sequelize.define("Thread", {
        // thread title to be displayed on subforum page and on individual thread pages
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
                // ADD MORE AS NEEDED TO PREVENT XSS
            }
        },
        // Post count to be displayed on subforum page
        postCount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        // Postive ratings of thread to be given by users
        Reputation: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // belongsToONe Subforum
    // belongsToMany Users who 'save' the thread to view from their profile at any time
    return Thread;
}