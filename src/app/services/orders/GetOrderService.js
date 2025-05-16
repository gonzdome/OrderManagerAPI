const OrderRepository = require('../../repositories/OrderRepository')

module.exports = async (request) => {
    const { page = 0, limit = 10, category } = request.query;
    
    const menu = await OrderRepository.getOrderList({ page: parseInt(page), limit: parseInt(limit), category });

    return menu;
};