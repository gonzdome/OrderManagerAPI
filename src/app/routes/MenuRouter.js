const { Router } = require('express');

const CreateMenuController = require('../controllers/menus/CreateMenuController');
const GetMenuController = require('../controllers/menus/GetMenuController');

const router = Router();

router.post('/', CreateMenuController);
router.get('/', GetMenuController);

module.exports = router;