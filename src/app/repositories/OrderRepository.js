const { Orders } = require('../database/models');
const OrderStatus = require('../../utils/OrderStatus');
const { handlePage } = require('../helpers/PaginationHelper');

const createOrder = async ({ customer_id }) => {
    const order = await Orders.create({ customer_id, status: "pending" });
    return { id: order.id, customer_id: order.customer_id, status: order.status };
};

const getOrderById = async ({ id }) => {
    const findOrderById = await Orders.findOne({ where: { id } });
    return findOrderById;
};

module.exports = { createOrder, getOrderById };