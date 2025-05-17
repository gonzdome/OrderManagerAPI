const CreateCustomerService = require('../src/app/services/customers/CreateCustomerService');
const GetCustomerByIdService = require('../src/app/services/customers/GetCustomerByIdService');

const mockedCustomer = {
    "name": `TestJest${new Date().getTime()}`,
    "email": `TestJest${new Date().getTime()}@email.com`,
    "phone": "14995682158"
};

const customerNotFound = (id) => ({
  "errorType": "Not Found",
  "message": `There is no customer with this ID: ${id}!`,
  "status": 404,
  "data": null,
});

test('GetCustomerByIdService - Success', async () => {
    mockedCustomer.email = `TestJest${new Date().getTime()}@email.com`;
    
    const request = { body: mockedCustomer };

    const customerCreated = await CreateCustomerService(request);

    const customerById = await GetCustomerByIdService(customerCreated.id);

    expect(customerCreated).toStrictEqual({
        id: customerById.id,
        name: customerById.name,
        email: customerById.email,
        phone: customerById.phone,
    });
});

test('GetCustomerByIdService - Error', async () => {
    const id = 999999999999999;
    try {
        await GetCustomerByIdService(id);
    } catch (error) {
        expect(error).toStrictEqual(customerNotFound(id));
    };
});