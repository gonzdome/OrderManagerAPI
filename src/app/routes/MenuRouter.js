const { Router } = require('express');

const CreateMenuController = require('../controllers/menus/CreateMenuController');
const GetMenuController = require('../controllers/menus/GetMenuController');

const router = Router();

router.post('/menu', CreateMenuController);
router.get('/menu', GetMenuController);

module.exports = router;