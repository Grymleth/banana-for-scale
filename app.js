const express = require('express');
const sendMail = require('./mailgun/mail');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000, () => {
    console.log('listening on port 3000');
});

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.get('/boxform.ejs', (req, res) => {
    res.sendFile(__dirname + '/views/forms/boxform.ejs');
});

app.get('/sphereform.ejs', (req, res) => {
    res.sendFile(__dirname + '/views/forms/sphereform.ejs');
});

app.post('/render', (req, res) => {
    console.log(req.body);
    res.render('render', { title: 'Render', dimensions: req.body });
});

app.post('/contact', (req, res) => {
    const { email, subject, message } = req.body;
    console.log('why is body empty');
    console.log(req.body);
    sendMail(email, subject, message, (err, data) => {
        if(err){
            res.status(500).json({ message: 'Internal sonuvabitch' });
        }
        else{
            res.json({ message: 'Email Sent!' });
        }
    });
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404 '});
});