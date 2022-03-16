module.exports = (sequelize, Sequelize) => {
    const job = sequelize.define("job", {

        job_role: {
            type: Sequelize.STRING
        },
        salary_range: {
            type: Sequelize.STRING
        },
        years_of_experience: {
            type: Sequelize.STRING
        },
        vacancies: {
            type: Sequelize.STRING
        },
        Employment_status: {
            type: Sequelize.STRING
        },
        employment_type: {
            type: Sequelize.STRING
        },
        education_level: {
            type: Sequelize.STRING
        },
        career_level: {
            type: Sequelize.STRING
        },
        Gender: {
            type: Sequelize.STRING
        },
        industry: {
            type: Sequelize.STRING
        },
        contry: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        joo_description: {
            type: Sequelize.STRING
        },
        max_years_of_experience: {
            type: Sequelize.INTEGER
        },
        dead_line: {
            type: Sequelize.DATE
        },
        requirements: {
            type: Sequelize.TEXT
        },
        status: {
            type: Sequelize.INTEGER
        },
        views: {
            type: Sequelize.INTEGER
        },
        AprovedByAdmin: {
            type: Sequelize.BOOLEAN
        }
    });
    return job;
};