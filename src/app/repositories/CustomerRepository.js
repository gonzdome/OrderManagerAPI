const { Customers } = require('../database/models');

const createCustomer = async ({name, email, phone}) => {
    const customer = await Customers.create({ name, email, phone });
    return { id: customer.id, name, email, phone };
}

const getCustomerByEmail = async ({ email }) => {
    const findCustomerByEmail = await Customers.findOne({ where: { email } }) ?? null;
    return findCustomerByEmail;
}

const getCustomerById = async ({ id }) => {
    const findCustomerById = await Customers.findOne({ where: { id } }) ?? null;
    return findCustomerById;
}

module.exports = { createCustomer, getCustomerByEmail, getCustomerById };