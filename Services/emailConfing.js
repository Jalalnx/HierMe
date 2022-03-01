 const mailing = require('nodemailer')
 const transporter = mailing.createTransport({
     service: 'gmail',
     auth: {
         user: 'jalalnx99@gmail.com',
         pass: 'bK6F4KN@DaUpjH6'
     }
 });


 module.exports = (transporter);