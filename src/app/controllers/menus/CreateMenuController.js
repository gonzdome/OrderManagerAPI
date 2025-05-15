const ResponseHelper = require("../../helpers/ResponseHelper");
const CreateMenuService = require("../../services/menus/CreateMenuService");
const CreateMenuValidator = require("../../validators/menus/CreateMenuValidator");

module.exports = async (request, response) => {
    try {
        await CreateMenuValidator(request);

        const customerCreated = await CreateMenuService(request);    
        return await ResponseHelper({ response, message: 'Menu created successfully', data: customerCreated });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, message: exception.message, ...exception });
    }
};