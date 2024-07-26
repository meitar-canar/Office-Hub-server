const express = require('express');
const router = express.Router();
const { AddContact } = require('../controllers/requestController');


router.post('/', AddContact);

module.exports = router;
