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
            }).catch((err) => console.warn(err));

        const clImg2 = await cloudinary.v2.uploader
            .upload(req.body.logo, {
                public_id: `institutes/${req.body.fax}`,
            }).catch((err) => console.warn(err));

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
            return res.status(201).send({ masseg: "oh", error: false, newProvider })

        }
    }


}