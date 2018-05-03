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
            defaultValue: 0
        },
        // Postive ratings of thread to be given by users
        reputation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    });

    // associates thread with a subforum
    Thread.associate = models => {
        Thread.belongsTo(models.Subforum);
        Thread.belongsTo(models.User);
        Thread.hasMany(models.Post);
    };

    return Thread;
}
