const { Customers } = require('../database/models');

const createCustomer = async ({name, email, phone}) => {
    Customers.create({ name, email, phone });
    return { name, email, phone };
}

const getCustomerByEmail = async ({ email }) => {
    var findCustomerByEmail = await Customers.findOne({ where: { email } }) ?? null;
    return findCustomerByEmail;
}

const getCustomerById = async ({ id }) => {
    var findCustomerById = await Customers.findOne({ where: { id } }) ?? null;
    return findCustomerById;
}

module.exports = { createCustomer, getCustomerByEmail, getCustomerById };