const ResponseHelper = require("../../helpers/ResponseHelper");
const GetMenuService = require("../../services/menus/GetMenuService");

module.exports = async (request, response) => {
    try {
        const customerCreated = await GetMenuService(request);    
        return await ResponseHelper({ response, message: 'Menus listed successfully', data: customerCreated });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, message: exception.message, ...exception });
    }
};