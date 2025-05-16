const { Router } = require('express');

const CreateCustomerController = require('../controllers/customers/CreateCustomerController');
const GetCustomerOrdersController = require('../controllers/customers/GetCustomerOrdersController');

const router = Router();

router.post('/', CreateCustomerController);
router.get('/orders/:customer_id', GetCustomerOrdersController);

module.exports = router;