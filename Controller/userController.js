const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');
const mailing = require('nodemailer')
const emailProvider = require('../Services/emailConfing')
const webpush = require('web-push');
const sql = require('mssql')
const Sequelize = require("sequelize");
const db = require("../models/database")
const fs = require("fs");
const upload = require('../Services/uploadMiddleware');
const path = require('path');
const Resize = require('../Services/Resize');
const job = require("../models/job");

require("dotenv").config();


exports.ping = (req, res) => {
        console.log("app ping in port 300");
        return res.status(200).json({ 'status': 'done', 'message': 'Server in up do work' });


    }
    //login end point
exports.login = async(req, res) => {

    //check if the user if exiting
    const user = await db.user.findOne({
        where: {
            Email: req.body.Email
        }
    });
    if (!user) {
        res.status(401).json({
            message: "Auth failed!! either the account does't exist or you entered a wrong account",
            error: true
        });
    } else {
        const match = bcrypt.compareSync(req.body.password, user.password); // true
        if (match) {
            // token = jwt.sign({ "id": user.id, "email": user.email, "first_name": user.first_name }, process.env.SECRET);
            let jwtSecretKey = "secret";
            let data = {
                time: Date(),
                userId: 12,
            }

            const token = jwt.sign(data,
                jwtSecretKey);

            res.status(202).json({
                message: "acppted",
                error: false,
                jwt: token,
                user: user
            });

        } else {
            res.status(401).json({
                message: "Wrong password",
                error: true,
            });
        }
    }

}

exports.register = async(req, res) => {

    const Check = await db.user.findOne({
        where: {
            Email: req.body.Email,
            phone: req.body.phone
        }
    });

    if (Check) {
        res.status(201).json("Email or phone allrady Exits");
    } else {
        const clImg = await cloudinary.v2.uploader
            .upload(req.body.photo, {
                public_id: `user/${req.body.Email}`,
            }).catch((err) => console.warn(err));


        ///genrate opt 
        const OTP = Math.floor(Math.random() * (00001 - 11000 + 1) + 9999);
        ///create the user
        const newuser = await db.user.create({
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            phone: req.body.phone,
            Email: req.body.Email,
            adress: req.body.adress,
            gender: req.body.gender,
            photo: clImg.secure_url,
            password: bcrypt.hashSync(req.body.password, 8),
            profession: req.body.profession,
            education_level: req.body.education_level,
            OPT: OTP,
            Email_Verfit: 0
        });
        if (!newuser) {
            return res.status(205).send('error in creating user')
        } else {
            return res.status(201).send({ masseg: "oh", error: false, Newuser: newuser })

        }
    }


}
exports.getJobs = async(req, res) => {

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
}


exports.apply = async(req, res) => {

        const newuser = await db.user.create({
            name: req.body.name,
            phone: req.body.phone,
            Email: req.body.Email,
            adress: req.body.adress,
            gender: req.body.gender,
            password: bcrypt.hashSync(req.body.password, 8),
            photo: clImg.secure_url,
            OPT: OTP,
            Email_Verfit: 1
        });
        if (!newuser) {
            return res.status(401).send('error in creating user')
        } else {
            return res.status(201).send({ masseg: "oh", error: false, Newuser: newuser })

        }
    }
    // exports.UpdateInfo = async(req, res) => {}


// exports.UpdateAppliction = async(req, res) => {}
// exports.getMyapplicatinos = async(req, res) => {}
// exports.Search = async(req, res) => {} res) => {}
// exports.Search = async(req, res) => {} res) => {}
// exports.Search = async(req, res) => {}