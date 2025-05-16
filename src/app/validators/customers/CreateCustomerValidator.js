const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { EmailRegex, PhoneRegex } = require("../../../utils/RegexToMatch");
const { missingParam, badRequest } = require("../../../utils/Messages");

module.exports = async (request) => {
    const { name, email, phone } = request.body;

    if (name === null || name === "") throw await HandleErrorHelper(missingParam(), missingParam('Name'), 422);
    
    if (email === null || email === "") throw await HandleErrorHelper(missingParam(), missingParam('Email', 422));
    if (!String(email).toLowerCase().match(EmailRegex)) throw await HandleErrorHelper(badRequest(), 'Invalid email format!', 400);

    if (phone === null || phone === "") throw await HandleErrorHelper(missingParam(), missingParam('Phone', 422));
    if (!String(phone).toLowerCase().match(PhoneRegex)) throw await HandleErrorHelper(badRequest(), 'Invalid phone format!', 400);
};