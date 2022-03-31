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
require("dotenv").config();

const slack = require("../support/Slack_API")



//تسجيل حساب جديد لمؤسسات
exports.newProvider = async(req, res) => {

        const Check = await db.institutes.findOne({
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
                    public_id: `institutes/${req.body.Email}`,
                }).catch((err) => {
                    console.warn(err);
                    return res.status(500).send('تأكد من ان جهازك متصل بأنترنت او قم بمراجعة مزود الخدمه')
                });
    

            const clImg2 = await cloudinary.v2.uploader
                .upload(req.body.logo, {
                    public_id: `institutes/${req.body.fax}`,
                }).catch((err) =>
                {
                    console.warn(err);
                    return res.status(500).send('تأكد من ان جهازك متصل بأنترنت او قم بمراجعة مزود الخدمه')
                });
    

            ///genrate opt 
            const OTP = Math.floor(Math.random() * (00001 - 11000 + 1) + 9999);
            ///create the user
            const newProvider = await db.institutes.create({
                CompanyName: req.body.CompanyName,
                workFiled: req.body.workFiled,
                Email: req.body.Email,
                adress: req.body.adress,
                fax: req.body.fax,
                phone: req.body.phone,
                logo: clImg2.secure_url,
                photo: clImg.secure_url,
                websiteUrl: req.body.websiteUrl,
                password: bcrypt.hashSync(req.body.password, 8),
            });
            if (!newProvider) {
                return res.status(205).send('error in creating user')
            } else {
                slack.run(`new compny ${newProvider.CompanyName}`, 'hireme-support'); //send notificions to slack

                return res.status(201).send({ masseg: "oh", error: false, newProvider })

            }
        }

    }
    // تسجيل دخول لمؤسسات

exports.login = async(req, res) => {
    //check if the user if exiting
    const institutes = await db.institutes.findOne({
        where: {
            Email: req.body.Email
        }
    });
    if (!institutes) {
        res.status(401).json({
            message: "Auth failed!! either the account does't exist or you entered a wrong account",
            error: true
        });
    } else {
        const match = bcrypt.compareSync(req.body.password, institutes.password); // true
        if (match) {
            // token = jwt.sign({ "id": user.id, "email": user.email, "first_name": user.first_name }, process.env.SECRET);
            let jwtSecretKey = "secret";
            let data = {
                time: Date(),
                userId: 12,
            }

            const token = jwt.sign(data,
                jwtSecretKey);


            slack.run(`${ institutes.CompanyName }
                        المهنه ${ institutes.workFiled }
                        تسجيل دخول جديد `, 'hireme-support', 'Login_Watcher'); //send notificions to slack

            Object.assign(institutes, {
                jwt: token
            })
            res.status(202).json({
                message: "acppted",
                error: false,
                jwt: token,
                institutes

            });

        } else {
            res.status(401).json({
                message: "Wrong password",
                error: true,
            });
        }
    }

}