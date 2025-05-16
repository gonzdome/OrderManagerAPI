const { Orders } = require('../database/models');
const OrderStatus = require('../../utils/OrderStatus');
const { handlePage } = require('../helpers/PaginationHelper');

const createOrder = async ({ customer_id }) => {
    const order = await Orders.create({ customer_id, status: "pending" });
    return { id: order.id, customer_id: order.customer_id, status: order.status };
}

const getOrderById = async ({ id }) => {
    const findOrderById = await Orders.findOne({ where: { id } });
    return findOrderById;
}

const getOrderList = async ({ page, limit, category = null }) => {
    let search = { offset: page, limit: limit, };
    if (category != null) search.where = { category };

    const findOrderByEmail = await Orders.findAndCountAll(search);

    return {
        count: findOrderByEmail.count,
        page: handlePage(page),
        limit: limit,
        rows: findOrderByEmail.rows.map(r => ({    
            id: r.id,
            name: r.name,
            description: r.description,
            price: r.price,
            priceConverted: (r.price / 100),
            category: r.category,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
        }))
    };
}

module.exports = { createOrder, getOrderById, getOrderList };