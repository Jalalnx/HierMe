const dbConfig = require("../Services/db.config");
const Sequelize = require("sequelize");
const UserModel = require("./user")
const jobModel = require("./job.js");
const institutesModel = require("./institutes.js")
const EmploymentApplicationsModel = require("./EmploymentApplications.model.js")
const attachmentModel = require("./attachments.model.js")


// https://sequelize.org/master/manual/assocs.html
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: 3307,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.jobs = jobModel(sequelize, Sequelize);
db.user = UserModel(sequelize, Sequelize);
db.institutes = institutesModel(sequelize, Sequelize);
db.EmploymentApplications = EmploymentApplicationsModel(sequelize, Sequelize);
db.attachments = attachmentModel(sequelize, Sequelize);
// https: //www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz


db.institutes.hasMany(db.jobs, { foreignKey: 'instituteId' });

db.jobs.belongsTo(db.institutes);


db.attachments.belongsTo(db.EmploymentApplications);
db.EmploymentApplications.belongsTo(db.user);
db.EmploymentApplications.belongsTo(db.jobs);

// db.EmploymentApplications.belongsToMany(db.user, { through: db.jobs, unique: false });



module.exports = db;