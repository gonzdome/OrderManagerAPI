const HandleErrorHelper = require("../../helpers/HandleErrorHelper");
const { EmailRegex, PhoneRegex } = require("../../../utils/RegexToMatch");

module.exports = async (request) => {
    const { name, email, phone } = request.body;

    if (name === null || name === "") throw await HandleErrorHelper('Missing Param', 'Name is a required param!', 422);
    
    if (email === null || email === "") throw await HandleErrorHelper('Missing Param', 'Email is a required param!', 422);
    if (!String(email).toLowerCase().match(EmailRegex)) throw await HandleErrorHelper('Bad Request', 'Invalid email format!', 400);

    if (phone === null || phone === "") throw await HandleErrorHelper('Missing Param', 'Phone is a required param!', 422);
    if (!String(phone).toLowerCase().match(PhoneRegex)) throw await HandleErrorHelper('Bad Request', 'Invalid phone format!', 400);
};