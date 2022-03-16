module.exports = (sequelize, Sequelize) => {
    const EmploymentApplications = sequelize.define("EmploymentApplications", {

        status: {
            type: Sequelize.INTEGER
        }
    });
    return EmploymentApplications;
};