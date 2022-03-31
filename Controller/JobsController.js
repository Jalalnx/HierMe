const db = require("../models/database");

const slack = require("../support/Slack_API")


// https: //www.bezkoder.com/node-js-express-sequelize-mysql/
// Create and Save a new Tutorial
exports.create = async(req, res) => {
    const job = await db.jobs.create({
        job_role: req.body.job_role,
        salary_range: req.body.salary_range,
        years_of_experience: req.body.years_of_experience,
        vacancies: req.body.vacancies,
        Employment_status: req.body.Employment_status,
        employment_type: req.body.employment_type,
        education_level: req.body.education_level,
        career_level: req.body.career_level,
        Gender: req.body.Gender,
        industry: req.body.industry,
        contry: req.body.contry,
        vacancies: req.body.vacancies,
        city: req.body.city,
        joo_description: req.body.joo_description,
        max_years_of_experience: req.body.max_years_of_experience,
        dead_line: req.body.dead_line,
        requirements: req.body.requirements,
        status: 0,
        views: 0,
        AprovedByAdmin: 0,
        instituteId: req.body.instituteId
    });
    if (!job) {
        return res.status(500).send('error in creating ')
    } else {
        slack.run(`  ${job.job_role} تم أنشاء وظيفه جديد  `, 'hireme-support'); //send notificions to slack

        return res.status(201).send({
            masseg: "created",
            error: false,
            Job: job
        })

    }
}
    // Retrieve all Tutorials from the database.
exports.findAll = async(req, res) => {

    const jobs = await db.jobs.findAll({
        where: {
            status: 0,
            AprovedByAdmin: 1
        },
        include: [
            db.institutes
        ],

    })

    return res.status(201).send({
        masseg: "All jobs directives",
        count: jobs.length,
        error: false,
        data: jobs
    })

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};