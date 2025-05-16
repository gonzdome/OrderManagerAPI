const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { missingParam, invalidParam } = require("../../../utils/Messages");
const OrderStatus = require("../../../utils/OrderStatus");

module.exports = async (request) => {
    const { order_id } = request.params;
    const { status } = request.body;

    if (order_id === null || order_id === "") throw await HandleErrorHelper(missingParam(), missingParam('Order ID (order_id)'), 422);
    if (!OrderStatus.includes(status)) throw await HandleErrorHelper(invalidParam(), invalidParam('Status allowed values:', `${OrderStatus.join(", ")}!`) , 403);
};