const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        // user's username as defined during user registration
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 50]
            }
        },
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
            unique: true,
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
        },

        // Allows users to report other users for breaking rules/posting inappropriate content
        reports: {
            type: DataTypes.TEXT,
            validation: {
                len: [1, 1000]
                // protect against xss
            }
        }
    }, 
    {
        hooks: {

            beforeCreate: ( user, options ) => {
                let salt = bcrypt.genSaltSync();

                let hashedPassword = bcrypt.hashSync( user.password, salt );

                user.password = hashedPassword;

                return user;
            }
/*
            beforeCreate: (user, options) => {
                let newPW = () => {

                    bcrypt.genSalt( 10, ( err, salt ) => {
                        if( err ) { throw err }

                        let hashedPw = () => { 
                            bcrypt.hash( user.password, salt, null, ( err, hash ) => {
                                if( err ) { throw err }
                                return hash
                            });
                        }

                        return hashedPw()
                    });
                }

                return newPW()
            } */
        }
    }

);

    // users associated with the posts that they create
    User.associate = function(models) {
        User.hasMany(models.Post);
        User.hasMany(models.Thread);
    };

    User.prototype.comparePassword = function( pass, cb ){
        bcrypt.compare( pass, this.password, function( err, match ){
            if( err ){
                return cb( err );
            }
            cb( null, match );
        });
    }

    return User;
};


// will associate with other Users to 'follow' them

