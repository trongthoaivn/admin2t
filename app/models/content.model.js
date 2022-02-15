module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define('content', {
        Name: {
            type: Sequelize.STRING,
        },
        Description: {
            type: Sequelize.STRING,
        },
        ShortDescription: {
            type: Sequelize.STRING,
        },
        KeySearch: {
            type: Sequelize.STRING,
        },
        Active: {
            type: Sequelize.INTEGER,
        },
        CreatedDate: {
            type: Sequelize.DATE,
        },
        Link: {
            type: Sequelize.STRING,
        },
        Image: {
            type: Sequelize.STRING,
        },
        Type: {
            type: Sequelize.INTEGER,
        },
        Code: {
            type: Sequelize.STRING,
        }
    })

    return Content
}