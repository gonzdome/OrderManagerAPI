const { OrderItems } = require('../database/models');

const createOrderItems = async ({ order_id, items }) => {
    const orderItemsToCreate = items.map(i => ({ order_id, menu_item_id: i.menu_item_id, quantity: i.quantity }));
    const createdOrderItems = await OrderItems.bulkCreate(orderItemsToCreate);
    return createdOrderItems.map(i => ({ id: i.id, order_id, menu_item_id: i.menu_item_id, quantity: i.quantity }));
}

const getOrderItemsByOrderId = async (id) => {
    const orders = await OrderItems.findAll({ where: { order_id: id }})
    return orders;
}

module.exports = { createOrderItems, getOrderItemsByOrderId };