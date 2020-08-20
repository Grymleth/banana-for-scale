const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const fs = require('fs');

const URI = fs.readFileSync('./mailgun/URI.txt', 'utf8');

const auth = {
    auth: {
        api_key: URI.slice(0, URI.indexOf('\n') - 1),
        domain: URI.slice(URI.indexOf('\n') + 1)
    }
};

console.log(auth);

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'aevan.candelaria@gmail.com',
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            cb(err, null);
        }
        else{
            cb(null, data);
        }
    });
};

module.exports = sendMail;