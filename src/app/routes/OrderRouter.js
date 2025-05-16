const { Router } = require('express');

const CreateOrderController = require('../controllers/orders/CreateOrderController');
const GetOrderController = require('../controllers/orders/GetOrderController');

const router = Router();

router.post('/', CreateOrderController);
router.get('/', GetOrderController);

module.exports = router;