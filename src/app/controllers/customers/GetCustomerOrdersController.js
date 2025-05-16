const ResponseHelper = require("../../helpers/ResponseHelper");
const GetCustomerOrdersService = require("../../services/customers/GetCustomerOrdersService");

module.exports = async (request, response) => {
    try {
        const { customer_id } = request.params;
        const { page = 0, limit = 10 } = request. query;

        const serviceResponse = await GetCustomerOrdersService({ page: parseInt(page), limit: parseInt(limit), customer_id: parseInt(customer_id) });    
        return await ResponseHelper({ response, message: 'Customer Orders listed successfully', data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message });
    }
};