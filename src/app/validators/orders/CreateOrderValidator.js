const HandleErrorHelper = require("../../helpers/HandleErrorHelper");

module.exports = async (request) => {
    const { customer_id, items } = request.body;

    if (customer_id === null || customer_id === "") throw await HandleErrorHelper('Missing Param', 'Customer ID (customer_id) is a required param!', 422);

    if (items.length === 0) throw await HandleErrorHelper('Missing Param', 'Should have at least one item!', 422);

    const itemsFiltered = items.filter(i => i.quantity === 0) ?? null;
    if (itemsFiltered.length > 0) throw await HandleErrorHelper('Missing Param', `The quantity for each item must be a positive integer greater than zero!`, 422, itemsFiltered);
};