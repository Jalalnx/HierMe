const route = require("express").Router();
const Jobcontroller = require("../Controller/JobsController");
const { check } = require('express-validator');

route.post("/insert_new", Jobcontroller.create);
route.get("/index",check('instituteId').not().isEmpty(),Jobcontroller.findAll);

module.exports = route;