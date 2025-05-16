const OrderRepository = require('../../repositories/OrderRepository')

module.exports = async (request) => {
    const order = await OrderRepository.createOrder({ customer_id: request.body.customer_id });
    return order;
};