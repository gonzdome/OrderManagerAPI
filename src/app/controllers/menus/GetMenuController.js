const ResponseHelper = require("../../helpers/ResponseHelper");
const GetMenuService = require("../../services/menus/GetMenuService");

module.exports = async (request, response) => {
    try {
        const serviceResponse = await GetMenuService(request);    
        return await ResponseHelper({ response, message: 'Menus listed successfully', data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message });
    }
};