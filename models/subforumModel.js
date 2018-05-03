module.exports = function(sequelize, DataTypes) {
    const Subforum = sequelize.define('Subforum', {
        category: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 100]
                // try to validate against XSS
            }
        }
    });

    // Suborum associated with many threads that belong to a specific subforum category
    Subforum.associate = function(models) {
        Subforum.hasMany(models.Thread);
    };

    return Subforum;
}