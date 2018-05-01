module.exports = function(sequelize, DataTypes) {
    const Subforum = sequelize.define('Subforum', {
        Category: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100]
                // try to validate against XSS
            }
        }
    });
    //Will haveMany threads

    return Subforum;
}