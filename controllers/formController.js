const path = require('path');
const form_box = (req, res) => {
    res.sendFile(path.dirname(__dirname) + '\\views\\forms\\box.ejs');
};

const form_sphere = (req, res) => {
    res.sendFile(path.dirname(__dirname) + '\\views\\forms\\sphere.ejs');
};

module.exports = {
    form_box,
    form_sphere
};