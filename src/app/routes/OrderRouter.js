const { Router } = require('express');

const CreateOrderController = require('../controllers/orders/CreateOrderController');
const UpdateOrderStatusController = require('../controllers/orders/UpdateOrderStatusController');
const UpdateOrderController = require('../controllers/orders/UpdateOrderController');

const router = Router();

router.post('/', CreateOrderController);
router.patch('/:order_id', UpdateOrderStatusController);
router.patch('/modify/:order_id', UpdateOrderController);

module.exports = router;