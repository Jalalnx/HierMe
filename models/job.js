module.exports = (sequelize, Sequelize) => {
    const job = sequelize.define("job", {

        job: {
            type: Sequelize.STRING
        },
        jobdescription: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.INTEGER
        },
        requirements: {
            type: Sequelize.TEXT
        },
        status: {
            type: Sequelize.INTEGER
        },
        AprovedByAdmin: {
            type: Sequelize.BOOLEAN
        }
    });
    return job;
};