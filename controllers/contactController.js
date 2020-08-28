// mail gun
const sendMail = require('../mailgun/mail');

const contact_index_get = (req, res) => {
    res.render('contact/contact', { title: 'Contact' });
};

const contact_index_post = (req, res) => {
    const { email, subject, message } = req.body;
    sendMail(email, subject, message, (err, data) => {
        if(err){
            res.status(500).json({ message: 'Internal sonuvabitch' });
        }
        else{
            res.json({ message: 'Email Sent!' });
        }
    });
};

module.exports = {
    contact_index_get,
    contact_index_post
};