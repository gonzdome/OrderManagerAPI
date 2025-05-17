const { getOrderItemsByOrderId, createOrderItems } = require("../../repositories/OrderItemRepository");

module.exports = async (order_id, items) => {
    const orderItemsFromDB = await getOrderItemsByOrderId(order_id);
    orderItemsFromDB.forEach(async oI => await oI.destroy());

    const order = await createOrderItems({ order_id, items });
    return order;
}