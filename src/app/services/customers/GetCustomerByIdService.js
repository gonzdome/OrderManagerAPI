const HandleErrorHelper = require('../../helpers/HandleErrorHelper');
const CustomerRepository = require('../../repositories/CustomerRepository')

module.exports = async (id) => {
    const customer = await CustomerRepository.getCustomerById({ id });
    if (customer == null) throw HandleErrorHelper('Not Found', `There is no customer with this ID: ${id}!`, 404);

    return customer;
};