const ResponseHelper = require("../../helpers/ResponseHelper");
const GetOrderService = require("../../services/orders/GetOrderService");

module.exports = async (request, response) => {
    try {
        const serviceResponse = await GetOrderService(request);    
        return await ResponseHelper({ response, message: 'Orders listed successfully', data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message });
    }
};