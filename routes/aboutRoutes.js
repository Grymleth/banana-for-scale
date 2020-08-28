const express = require('express');
const aboutControllers = require('../controllers/aboutController');
const router = express.Router();

router.get('/', aboutControllers.about_index);

module.exports = router;