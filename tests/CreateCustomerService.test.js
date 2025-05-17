const CreateCustomerService = require('../src/app/services/customers/CreateCustomerService');
const { Customers } = require('../src/app/database/models')

const mockedCustomer = {
    "name": `TestJest${new Date().getTime()}`,
    "email": `TestJest${new Date().getTime()}@email.com`,
    "phone": "14995682158"
};

const emailAlreadyInUse = {
  "errorType": "Already Exists",
  "message": "This email is already in use!",
  "status": 403,
  "data": null,
};

const createUser = async () => {
    const request = { body: mockedCustomer };
    return await CreateCustomerService(request);
}

test('CreateCustomerService - Success', async () => {
    const customerCreated = await createUser();
    mockedCustomer.id = customerCreated.id;

    expect(customerCreated).toStrictEqual(mockedCustomer);
});

test('CreateCustomerService - Error: This email is already in use!', async () => {
    mockedCustomer.email = `TestJest_${new Date().getTime()}@email.com`;
    await createUser();

    try {
        await createUser();
    } catch (error) {
        expect(error).toStrictEqual(emailAlreadyInUse);
    }
});

