const { Customers } = require('../database/models');

const createCustomer = async ({name, email, phone}) => {
    Customers.create({ name, email, phone });
    return { name, email, phone };
}

const getCustomerByEmail = async ({ email }) => {
    var findCustomerByEmail = await Customers.findOne({ email }) ?? null;
    return findCustomerByEmail;
}

module.exports = { createCustomer, getCustomerByEmail };