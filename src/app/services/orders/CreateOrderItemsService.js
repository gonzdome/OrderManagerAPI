const OrderItemRepository = require('../../repositories/OrderItemRepository')

module.exports = async (order_id, items) => {
    const order = await OrderItemRepository.createOrderItems({ order_id, items });
    return order;
};