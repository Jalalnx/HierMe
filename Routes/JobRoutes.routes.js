const route = require("express").Router();
const Jobcontroller = require("../Controller/JobsController");
const { check } = require('express-validator');

route.post("/insert_new", Jobcontroller.create);
route.post("/index",check('instituteId').not().isEmpty(),Jobcontroller.findAll);
route.post("/delete",Jobcontroller.delete);
route.post("/getemploymentapplications",Jobcontroller.employmentapplications);
route.post("/updateEmploymentApplications",Jobcontroller.employmentapplicationsStutes);

module.exports = route;