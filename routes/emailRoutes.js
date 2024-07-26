const express = require('express');
const router = express.Router();

const { sendRequestEmail } = require('../controllers/emailController');

router.post('/sendRequest', sendRequestEmail);

module.exports = router;