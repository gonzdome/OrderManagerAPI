const { Router } = require('express');

const CreateOrderController = require('../controllers/orders/CreateOrderController');
const UpdateOrderStatusController = require('../controllers/orders/UpdateOrderStatusController');

const router = Router();

router.post('/', CreateOrderController);
router.patch('/modify/:order_id', UpdateOrderStatusController);

module.exports = router;