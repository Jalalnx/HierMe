module.exports = (sequelize, Sequelize) => {
    const EmploymentApplications = sequelize.define("EmploymentApplications", {
        job_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        attachments_id: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.INTEGER
        },
        views: {
            type: Sequelize.INTEGER
        }
    });
    return EmploymentApplications;
};