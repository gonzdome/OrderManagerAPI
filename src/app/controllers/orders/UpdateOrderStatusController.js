const ResponseHelper = require("../../helpers/ResponseHelper");
const GetOrderByIdService = require("../../services/orders/GetOrderByIdService");
const GetOrderByIdValidator = require("../../validators/orders/GetOrderByIdValidator");
const { updated } = require("../../../utils/Messages");
const UpdateOrderStatusService = require("../../services/orders/UpdateOrderStatusService");

module.exports = async (request, response) => {
    try {
        await GetOrderByIdValidator(request);

        const order = await GetOrderByIdService(request.params.order_id);  

        const serviceResponse = await UpdateOrderStatusService(request.body.status, order);

        return await ResponseHelper({ response, message: updated('Order status'), data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message, errorType: exception.errorType ?? null });
    }
};