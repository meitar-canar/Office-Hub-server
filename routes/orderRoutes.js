const express = require('express');
const router = express.Router();
const { GetOrder, CreateOrder, UpdateOrder, DeleteOrder } = require('../controllers/orderController');

router.get('/', GetOrder);
router.post('/', CreateOrder);
router.put('/:orderId', UpdateOrder);
router.delete('/:orderId', DeleteOrder);

module.exports = router;
