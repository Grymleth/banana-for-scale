const express = require('express');
const formController = require('../controllers/formController');
const router = express.Router();

router.get('/box', formController.form_box);

router.get('/sphere', formController.form_sphere);

module.exports = router;