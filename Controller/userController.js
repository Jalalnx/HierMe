const User = require("../models/user")
const jwt = require("jsonwebtoken")
const config = require('../Services/keyConfig');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');
const mailing = require('nodemailer')
const emailProvider = require('../Services/emailConfing')
const webpush = require('web-push');
const sql = require('mssql')
const Sequelize = require("sequelize");
const db = require("../models/database")

exports.ping = (req, res) => {
        console.log("app paing in port 300");
        return res.status(200).json({ 'status': 'done', 'message': 'Server in up do work' });


    }
    //login end point
exports.login = async(req, res) => {
    if (err) throw err;
    var token = jwt.sign({ id: req.phone }, config.secretKey, { expiresIn: 86400 });
    res.status(200).send({ auth: true, token: token });


    // const user = await User.findOne({ email: req.body.email });
    // if (!user) {
    //     res.status(401).json("Something went wrong!");
    // }
    // const bytes = CryptoJS.AES.decrypt(user.password,
    //     process.env.SECRET_KEY);
    // const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    // if (originalPassword !== req.body.password) {
    res.status(401).json("Something went wrong!");
    // con.query("SELECT * FROM users", function(err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    // });
}

exports.register = async(req, res) => {

        const photo = await req.body.photo;
        // console.log(photo)
        // const clImg = await cloudinary.v2.uploader
        //     .upload(photo, {
        //         public_id: `user/${req.body.Email}`,
        //     }).catch((err) => console.warn(err));
        console.log("mack img upload");
        ///genrate opt 
        const OTP = Math.floor(Math.random() * (0001 - 11000 + 1) + 9999);
        // //send email 
        // const mailOptions = {
        //     from: 'Hier me Team',
        //     to: request.body.email,
        //     subject: 'OPT code ',
        //     text: "You optp code is:" + OTP
        // };

        ////Encrpt the password
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        console.log("mack to password");
        try {
            ///create the user
            db.user.create({
                    name: request.body.name,
                    phone: req.body.phone,
                    Email: request.body.Email,
                    address: request.body.address,
                    gender: request.body.gender,

                    password: hashedPassword,
                    OPT: OTP,
                    Email_Verfit: 1
                })
                .then((user) => {
                    if (user) { res.status(201).send(user); } else {
                        res.status(400).send("user dont crated");
                    }
                })


        } catch (err) {
            console.log(err)
            return res.status(500).json(err)

        }
    }
    // }
    // exports.info = async(req, res) => {}
    // exports.UpdateInfo = async(req, res) => {}
    // exports.getJobs = async(req, res) => {}
    // exports.apply = async(req, res) => {}
    // exports.UpdateAppliction = async(req, res) => {}
    // exports.getMyapplicatinos = async(req, res) => {}
    // exports.Search = async(req, res) => {}