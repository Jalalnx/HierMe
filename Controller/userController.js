const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');
const mailing = require('nodemailer')
const emailProvider = require('../Services/emailConfing')
const webpush = require('web-push');
const db = require("../models/database")
const job = require("../models/job");
const fs = require("fs");
const upload = require('../Services/uploadMiddleware');
const path = require('path');
const Resize = require('../Services/Resize');
const { validationResult } = require('express-validator');
require("dotenv").config();
const axios = require('axios');
const config = process.Configuration;


const slackToken = 'xoxb-3225785419078-3286188532210-jS82ravJ0axw9vLwhnmCUkzI'; //Bot User OAuth Token
const url = 'https://slack.com/api/chat.postMessage';


exports.ping = async(req, res) => {
        console.log("app ping in port 300");

         axios.post(url, {
            channel: 'hireme-support',
            text: 'Hire me suport is up to work',
            username: 'Test App',
            icon_emoji: ':male-technologist:'
        }, { headers: { authorization: `Bearer ${slackToken}` } });

        console.log('Done', res.data);
        return res.status(200).json({
            'status': 'done',
            'message': 'Server in up do work',
        });


    }
    //login end point
exports.login = async(req, res) => {
    //check if the user if exiting
    console.log(req.body.Email)
    const user = await db.user.findOne({
        where: {
            Email: req.body.Email
        }
    });
    if (!user) {
        res.status(200).json({
            message: "الحساب غير موجود تاكد من بياناتك",
            error: true
        });
    } else {
        const match =  bcrypt.compareSync(req.body.password, user.password); // true
        if (match) {

              axios.post(url, {
                channel: 'hireme-support',
                text: ` New login prosess user => ${user.f_name} , profession => ${user.profession} `,
                username: 'UserWatcher',
                icon_emoji: ':male-technologist:'
            }, { headers: { authorization: `Bearer ${slackToken}` } });

            res.status(200).json({
                message: "acppted",
                error: false,
                user: user
            });

        } else {
            res.status(200).json({
                message: "Wrong password",
                error: true,
            });
        }
    }

}

exports.register = async(req, res) => {

    const Check = await db.user.findOne({
        where: {
            Email: req.body.Email
        }
    });
    const Check2 = await db.user.findOne({
        where: {
            phone: req.body.phone
        }
    });

    if (Check ||  Check2) {
        res.status(201).json("Email or phone allrady Exits");
    } else {


        const clImg = cloudinary.v2.uploader.upload(req.body.photo, {
                 public_id: `user/${req.body.Email}`,
            }).catch((err) => 
            {
                console.warn(err);
                return res.status(200).send({
                    masseg: "مشكله في الاتصال",
                    error: true,
                });
            });


        //genrate opt 
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
             axios.post(url, {
                channel: 'hireme-support',
                text: ` New user => ${newuser.f_name +" " + newuser.l_name} , profession => ${newuser.profession} `,
                username: 'UserWatcher',
                icon_emoji: ':male-technologist:'
            }, { headers: { authorization: `Bearer ${slackToken}` } });

            return res.status(201).send({ masseg: "oh", error: false, Newuser: newuser });

        }
    }


}


exports.getJobs = async(req, res) => {

    const jobs = await db.jobs.findAll({
      
        include: [
            db.institutes
        ],

    })

    if(jobs){
        return res.status(200).send({
            masseg: "All jobs directives",
            count: jobs.length,
            error: false,
            data: jobs
        })
    }else{
        return res.status(201).send({
            masseg: "no job list for now",
            error: true,
        })
    }
    
}




exports.getMyApplictions = async(req, res) => {

    const id = await req.body.userId  ;
    console.log(id);
    const appllictions = await db.EmploymentApplications.findAll({
        where:{
            userId:id
        },
        include:[
            db.jobs
        ]
    }).catch((err) => 
    {
        return res.status(200)
        .send({
                masseg:`مشكلة  في جلب البيانات الخاصه بمستخم ${err}`,
                error: true
            })
    })

    if(appllictions){

         res.status(200)
         .send({
            masseg: "All appllictions directives",
            count: appllictions.length,
            error: false,
            data: appllictions
           });
    
    }else{
         res.status(200)
         .send({
            masseg: "thier is no records yet",
            error: true,
            });
    
    }  
}


 exports.notifyUser = async(req, res) => {

        const userID= req.body.userId || req.params.userId;

        const messagegs =await db.notify.findAll({
            where: {
                userId :userID
            },
            include : [
                db.jobs
            ]
            
        });

        res.status(200).send({
            masseg: "All appllictions directives",
            count: messagegs.length,
            error: false,
            data: messagegs
        })

 }
exports.apply = async(req, res) => {
    const newEmploymentApplications = await db.EmploymentApplications.create({
        status: 0,
        userId: req.body.userId,
        jobId: req.body.jobId,
        instituteId: req.body.instituteId
    });
    if(newEmploymentApplications)
    {

        const user = await db.user.findOne({
            where: {
                id: req.body.userId
            }
        });
        const job = await db.jobs.findOne({
            where: {
                id: req.body.jobId
            }
        });
          axios.post(url, {
            channel: 'hireme-support',
            text: ` New  Employment Applications  user => ${user.f_name } ${user.l_name} , job => ${job.job_role} `,
            username: 'JobWatcher',
            icon_emoji: ':male-technologist:'
        }, { headers: { authorization: `Bearer ${slackToken}` } });

        res.status(200).send({
        masseg:" تم التقديم لوظيفه بنجاح",
        error: false,
    })
}else{
    
        res.status(200).send({
        masseg:"فشل التثديم الوظيفه",
        error: true,
    })

}

}
