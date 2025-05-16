const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { EmailRegex, PhoneRegex } = require("../../../utils/RegexToMatch");
const MenuCategories = require("../../../utils/MenuCategories");
const { missingParam, invalidParam } = require("../../../utils/Messages");

module.exports = async (request) => {
    const { name, description, price, category } = request.body;

    if (name === null || name === "") throw await HandleErrorHelper(missingParam(), missingParam('Name'), 422);

    if (description === null || description === "") throw await HandleErrorHelper(missingParam(), missingParam('Description'), 422);

    if (price === null || price < 0) throw await HandleErrorHelper(invalidParam(), invalidParam('Price cannot be lower than 0!'), 403);


    if (category === null || category === "") throw await HandleErrorHelper(missingParam(), missingParam('Category'), 422);
    if (!MenuCategories.includes(category)) throw await HandleErrorHelper(invalidParam(), invalidParam('Category allowed values', `:${MenuCategories.join(", ")}!`) , 403);
};