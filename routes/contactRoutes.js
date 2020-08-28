const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();

router.get('/', contactController.contact_index_get);

router.post('/', contactController.contact_index_post);

module.exports = router;