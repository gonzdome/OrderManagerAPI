const ResponseHelper = require("../../helpers/ResponseHelper");
const GetCustomerByIdService = require("../../services/customers/GetCustomerByIdService");
const GetMenusByIdsService = require("../../services/menus/GetMenusByIdsService");
const CreateOrderService = require("../../services/orders/CreateOrderService");
const CreateOrderItemsService = require("../../services/orders/CreateOrderItemsService");
const CreateOrderValidator = require("../../validators/orders/CreateOrderValidator");
const CreateOrderItemsValidator = require("../../validators/orders/CreateOrderItemsValidator");
const { created } = require("../../../utils/Messages");

module.exports = async (request, response) => {
    try {
        await CreateOrderValidator(request);

        await GetCustomerByIdService(request.body.customer_id);

        const listedItems = await GetMenusByIdsService(request.body.items.map(i =>  i.menu_item_id ));

        await CreateOrderItemsValidator(request.body.items, listedItems);

        const order = await CreateOrderService(request);   
        const orderItems = await CreateOrderItemsService(order.id, request.body.items);   

        return await ResponseHelper({ response, message: created('Order and Order Items'), data: { order, orderItems } });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message, errorType: exception.errorType ?? null, data: exception.data });
    }
};