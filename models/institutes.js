module.exports = (sequelize, Sequelize) => {
    const institutes = sequelize.define("institutes", {

        CompanyName: {
            type: Sequelize.STRING
        },
        workFiled: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        adress: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING
        },
        fax: {
            type: Sequelize.STRING
        },

        phone: {
            type: Sequelize.STRING
        },
        logo: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        websiteUrl: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return institutes;
};