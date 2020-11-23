const express = require('express');
// import routes
const formRoutes = require('./routes/formRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// register view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.use('/about', aboutRoutes);

app.use('/contact', contactRoutes);

app.post('/render', (req, res) => {
    console.log(req.body);
    res.render('render', { title: 'Render', dimensions: req.body });
});

app.post('/contact', (req, res) => {
    
});

app.use('/forms', formRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: '404 '});
});