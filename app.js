const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
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

app.post('/render', (req, res) => {
    console.log(req.body);
    res.render('render', { title: 'Render', dimensions: req.body });
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.redirect('404');
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404 '});
});