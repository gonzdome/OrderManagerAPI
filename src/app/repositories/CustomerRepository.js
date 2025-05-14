// TODO: Connect with database and do all necessary changes
const customers = [
    { name: "teste", email: "teste@email.com", phone: "14997234156" },
    { name: "teste2", email: "teste2@email.com", phone: "14997234156" },
]

const createCustomer = async ({name, email, phone}) => {
    customers.push({ name, email, phone });
    return { name, email, phone };
}

const getCustomerByEmail = async ({ email }) => {
    var findCustomerByEmail = customers.find(u => u.email === email) ?? null;
    return findCustomerByEmail;
}

module.exports = { createCustomer, getCustomerByEmail };