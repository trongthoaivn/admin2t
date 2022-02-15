module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        DisplayName: {
            type: Sequelize.STRING,
        },
        UserName: {
            type: Sequelize.STRING,
        },
        Password: {
            type: Sequelize.STRING,
        },
        Email: {
            type: Sequelize.STRING,
        },
        Phone: {
            type: Sequelize.STRING,
        }
    })
    return User
}