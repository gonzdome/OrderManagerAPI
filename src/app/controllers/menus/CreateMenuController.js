const ResponseHelper = require("../../helpers/ResponseHelper");
const CreateMenuService = require("../../services/menus/CreateMenuService");
const CreateMenuValidator = require("../../validators/menus/CreateMenuValidator");
const { created } = require('../../../utils/Messages');

module.exports = async (request, response) => {
    try {
        await CreateMenuValidator(request);

        const serviceResponse = await CreateMenuService(request);

        return await ResponseHelper({ response, message: created('Menu'), data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message });
    }
};