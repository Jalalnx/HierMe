const route = require("express").Router();
const Jobcontroller = require("../Controller/JobsController");


route.post("/insert_new", Jobcontroller.create);

module.exports = route;