const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('listening on port 3000');
})

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404 '});
})