const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { missingParam, invalidParam } = require("../../../utils/Messages");
const OrderStatus = require("../../../utils/OrderStatus");

module.exports = async (order_id, order = null, items = null) => {
    if (order_id === null || order_id === "") throw await HandleErrorHelper(missingParam(), missingParam('Order ID (order_id)'), 422);

    const statusToUpdate = ['pending', 'preparing'];
    if (order != null && !statusToUpdate.includes(order.status)) throw await HandleErrorHelper(invalidParam(), invalidParam('Status allowed values to update:', `${statusToUpdate.join(", ")}!`) , 403);

    if (items != null) {
        if (items != null && items.length === 0) throw await HandleErrorHelper(missingParam(), 'Should have at least one item!', 422);
        
        const itemsFiltered = items.filter(i => i.quantity === 0) ?? null;
        if (itemsFiltered.length > 0) throw await HandleErrorHelper(badRequest(), `The quantity for each item must be a positive integer greater than zero!`, 400, itemsFiltered);
    };
    
};