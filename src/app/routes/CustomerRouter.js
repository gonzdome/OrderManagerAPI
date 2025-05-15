const { Router } = require('express');

const CreateCustomerController = require('../controllers/customers/CreateCustomerController');

const router = Router();

router.post('/customer', CreateCustomerController);

module.exports = router;