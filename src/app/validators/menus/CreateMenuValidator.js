const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { EmailRegex, PhoneRegex } = require("../../../utils/RegexToMatch");
const MenuCategories = require("../../../utils/MenuCategories");

module.exports = async (request) => {
    const { name, description, price, category } = request.body;

    if (name === null || name === "") throw await HandleErrorHelper('Missing Param', 'Name is a required param!', 422);

    if (description === null || description === "") throw await HandleErrorHelper('Missing Param', 'Description is a required param!', 422);

    if (price === null || price < 0) throw await HandleErrorHelper('Invalid Param', 'Price cannot be lower than 0!', 403);


    if (category === null || category === "") throw await HandleErrorHelper('Missing Param', 'Category is a required param!', 422);
    if (!MenuCategories.includes(category)) throw await HandleErrorHelper('Invalid Param', `Category allowed values: ${MenuCategories.join(", ")}!`, 403);
};