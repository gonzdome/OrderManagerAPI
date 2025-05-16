const OrderRepository = require('../../repositories/OrderRepository')

module.exports = async (id) => {
    const order = await OrderRepository.getOrderById({ id });
    return order;
};