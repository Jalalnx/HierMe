module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        f_name: {
            type: Sequelize.STRING
        },
        l_name: {
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
        education_level: {
            type: Sequelize.STRING
        },
        profession: {
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