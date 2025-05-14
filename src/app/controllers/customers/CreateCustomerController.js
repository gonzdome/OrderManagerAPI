const ResponseHelper = require("../../helpers/ResponseHelper");
const CreateCustomerService = require("../../services/customers/CreateCustomerService");
const CreateCustomerValidator = require("../../validators/customers/CreateCustomerValidator");

module.exports = async (request, response) => {
    try {
        await CreateCustomerValidator(request);

        const customerCreated = await CreateCustomerService(request);    
        return await ResponseHelper({ response, message: 'Customer created successfully', data: customerCreated });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, message: exception.message, ...exception });
    }
};