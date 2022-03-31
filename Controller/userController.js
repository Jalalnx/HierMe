const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');
const mailing = require('nodemailer')
const emailProvider = require('../Services/emailConfing')
const webpush = require('web-push');
const Sequelize = require("sequelize");
const db = require("../models/database")
const fs = require("fs");
const upload = require('../Services/uploadMiddleware');
const path = require('path');
const Resize = require('../Services/Resize');
const job = require("../models/job");
require("dotenv").config();
const axios = require('axios');
const config = process.Configuration;

const slackToken = 'xoxb-3225785419078-3286188532210-jS82ravJ0axw9vLwhnmCUkzI'; //Bot User OAuth Token
const url = 'https://slack.com/api/chat.postMessage';


exports.ping = async(req, res) => {
        console.log("app ping in port 300");

        const res2 = await axios.post(url, {
            channel: 'hireme-support',
            text: 'Hire me suport is up to work',
            username: 'Test App',
            icon_emoji: ':male-technologist:'
        }, { headers: { authorization: `Bearer ${slackToken}` } });

        console.log('Done', res.data);
        return res.status(200).json({
            'status': 'done',
            'message': 'Server in up do work',
            "res": res2.data
        });


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
            token = jwt.sign({ "id": user.id, "email": user.email }, config.JWT_SECRET_KEY);
            // let jwtSecretKey = "secret";
            // let data = {
            //     time: Date(),
            //     userId: 12,
            // }
            const res2 = await axios.post(url, {
                channel: 'hireme-support',
                text: `${user.profession} المهنه  ${user.f_name}تسجيل دخول جديد `,
                username: 'Daroat Jalal',
                icon_emoji: ':male-technologist:'
            }, { headers: { authorization: `Bearer ${slackToken}` } });

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
            }).catch((err) => 
            {
                console.warn(err);
                return res.status(500).send('تأكد من ان جهازك متصل بأنترنت او قم بمراجعة مزود الخدمه')
            });


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


// exports.UpdateInfo = async(req, res) => {}


// exports.UpdateAppliction = async(req, res) => {}
// exports.getMyapplicatinos = async(req, res) => {}
// exports.Search = async(req, res) => {} res) => {}
// exports.Search = async(req, res) => {} res) => {}
// exports.Search = async(req, res) => {}