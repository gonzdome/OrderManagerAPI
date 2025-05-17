const ResponseHelper = require("../../helpers/ResponseHelper");
const GetOrderByIdService = require("../../services/orders/GetOrderByIdService");
const GetMenusByIdsService = require("../../services/menus/GetMenusByIdsService");
const UpdateOrderItemsService = require("../../services/orders/UpdateOrderItemsService");
const UpdateOrderValidator = require("../../validators/orders/UpdateOrderValidator");
const CreateOrderItemsValidator = require("../../validators/orders/CreateOrderItemsValidator");
const { updated } = require("../../../utils/Messages");

module.exports = async (request, response) => {
    try {
        await UpdateOrderValidator(request.params.order_id);

        const order = await GetOrderByIdService(request.params.order_id); 

        await UpdateOrderValidator(order.id, order, request.body.items);

        const listedItems = await GetMenusByIdsService(request.body.items.map(i =>  i.menu_item_id ));
        await CreateOrderItemsValidator(request.body.items, listedItems);

        const serviceResponse = await UpdateOrderItemsService(order.id, request.body.items);

        return await ResponseHelper({ response, message: updated('Order status'), data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message, errorType: exception.errorType ?? null });
    }
};