const { alreadyExists } = require('../../../utils/Messages');
const HandleErrorHelper = require('../../helpers/HandleErrorHelper');
const CustomerRepository = require('../../repositories/CustomerRepository')

module.exports = async (request) => {
    const { name, email, phone } = request.body;
    
    const customer = await CustomerRepository.getCustomerByEmail({ email });
    if (customer != null) throw HandleErrorHelper(alreadyExists(), alreadyExists('email'), 403);

    const createdCustomer = await CustomerRepository.createCustomer({ name, email, phone });
    return createdCustomer;
};