const { Router } = require('express');

const CreateOrderController = require('../controllers/orders/CreateOrderController');
const GetOrderController = require('../controllers/orders/GetOrderController');

const router = Router();

router.post('/order', CreateOrderController);
router.get('/order', GetOrderController);

module.exports = router;