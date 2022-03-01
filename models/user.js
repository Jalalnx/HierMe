module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        Email: {
            type: Sequelize.STRING
        },
        adress: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        OPT: {
            type: Sequelize.INTEGER
        },
        Email_Verfit: {
            type: Sequelize.BOOLEAN
        },

    });
    return user;
};