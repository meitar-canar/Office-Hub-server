const express = require('express');
const router = express.Router();
const { insertPayment } = require('../controllers/payMentController');

router.post('/', insertPayment);

module.exports = router;
