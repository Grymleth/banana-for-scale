
const about_index = (req, res) => {
    res.render('about/about', { title: 'About' });
};

module.exports = {
    about_index
};