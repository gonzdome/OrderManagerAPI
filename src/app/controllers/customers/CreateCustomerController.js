const ResponseHelper = require("../../helpers/ResponseHelper");
const CreateCustomerService = require("../../services/customers/CreateCustomerService");
const CreateCustomerValidator = require("../../validators/customers/CreateCustomerValidator");
const { created } = require('../../../utils/Messages');

module.exports = async (request, response) => {
    try {
        await CreateCustomerValidator(request);

        const serviceResponse = await CreateCustomerService(request);

        return await ResponseHelper({ response, message: created('Customer'), data: serviceResponse });
    } catch (exception) {
        return await ResponseHelper({ response, success: false, status: exception.status ?? 500, message: exception.message });
    }
};