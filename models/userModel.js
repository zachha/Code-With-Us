module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [1, 50]
            // ...
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
                isEmail: true
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postcount: DataTypes.INTEGER,
        reputation: DataTypes.INTEGER
    });
    return User;
};

// will associate with other Users to 'follow' them
// will associate with comments to 'own' them
// will associate with threads to 'favorite'/'save' them
