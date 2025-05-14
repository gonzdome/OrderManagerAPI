const HandleErrorHelper = require('../helpers/HandleErrorHelper');
const CustomerRepository = require('../repositories/CustomerRepository')

module.exports = async (request) => {
    const { name, email, phone } = request.body;
    
    var customer = await CustomerRepository.getCustomerByEmail({ email });
    if (customer != null) throw HandleErrorHelper('Already Exists', 'This email is already in use!', 403);

    var customer = await CustomerRepository.createCustomer({ name, email, phone });
    return customer;
};