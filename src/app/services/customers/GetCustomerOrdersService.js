const HandleErrorHelper = require('../../helpers/HandleErrorHelper');
const CustomerRepository = require('../../repositories/CustomerRepository')

module.exports = async ({ page, limit, customer_id = null }) => {
    if (page != 0) page -= 1;

    const customer = await CustomerRepository.getCustomerOrdersByCustomerId({ page, limit, customer_id });
    if (customer == null) throw HandleErrorHelper('Not Found', `There is no customer with this ID: ${id}!`, 404);

    return customer;
};