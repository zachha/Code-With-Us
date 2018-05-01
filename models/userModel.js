module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        // user's username as defined during user registration
        username: DataTypes.STRING,
        // user's password as defined during user registration
        password: {
            type: DataTypes.STRING,
            notEmpty: true,
            validate: {
                len: [1, 75]
            // ...
            }
        },
        // user's email input during registration
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 254],
                isEmail: true
            }
        },
        // user's picture (a default image will be given if none is entered by user)
        picture: DataTypes.STRING,
        // User's post count, displays how many posts they've entered on the site
        postCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        // User's reputation, as increased/reduced by other users
        reputation: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        // Check to see if user is a moderator, which unlocks options to delete/modify posts and user content on the site
        isModerator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        } 
    });
    return User;
};

// will associate with other Users to 'follow' them
// will associate with comments to 'own' them
// will associate with threads to 'favorite'/'save' them
