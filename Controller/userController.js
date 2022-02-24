const User = require("../models/user")
const jwt = require("jsonwebtoken")
    // const dbConnection = require("../Services/DB")


// const { poolPromise } = require('../Services/db')
// const sql = require('mssql')
exports.ping = (req, res) => {
    console.log("app paing in port 300");
    return res.status(200).json({ 'status': 'done', 'message': 'Server in up do work' });
}


//login end point
exports.login = async(req, res) => {
    if (err) throw err;
    // con.query("SELECT * FROM users", function(err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    // });
}

exports.register = async(req, res) => {}
exports.info = async(req, res) => {}
exports.UpdateInfo = async(req, res) => {}
exports.getJobs = async(req, res) => {}
exports.apply = async(req, res) => {}
exports.UpdateAppliction = async(req, res) => {}
exports.getMyapplicatinos = async(req, res) => {}
exports.Search = async(req, res) => {}