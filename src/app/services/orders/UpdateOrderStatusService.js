const { conflict } = require('../../../utils/Messages');
const HandleErrorHelper = require('../../helpers/HandleErrorHelper');
const OrderRepository = require('../../repositories/OrderRepository')

module.exports = async (status, order) => {
    if (order.status === status) throw await HandleErrorHelper(conflict(), conflict('Status', status), 422);

    order.status = status;
    order.changed('status', true);
    await order.save();
};