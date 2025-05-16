const { missingParam, badRequest } = require("../../../utils/Messages");
const HandleErrorHelper = require("../../helpers/HandleErrorHelper");

module.exports = async (request) => {
    const { customer_id, items } = request.body;

    if (customer_id === null || customer_id === "") throw await HandleErrorHelper(missingParam(), missingParam('Customer ID (customer_id)'), 422);

    if (items.length === 0) throw await HandleErrorHelper(missingParam(), 'Should have at least one item!', 422);

    const itemsFiltered = items.filter(i => i.quantity === 0) ?? null;
    if (itemsFiltered.length > 0) throw await HandleErrorHelper(badRequest(), `The quantity for each item must be a positive integer greater than zero!`, 400, itemsFiltered);
};