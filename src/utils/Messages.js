module.exports = {
    created: (string) => `${string} created successfully!`,
    updated: (string) => `${string} updated successfully!`,
    missingParam: (string) => !string ? 'Missing Param' : `${string} is a required param!`,
    notFound: (string) => !string ? 'Not Found' : `${string} not found!`,
    invalidParam: (string, string2) => !string ? 'Invalid Param' : `${string} ${string2}`,
    badRequest: 'Bad Request',
    conflict: (string, string2) => !string ? 'Conflict' : `${string} value is already: ${string2}`,
    alreadyExists: (string) => !string ? 'Already Exists' : `This ${string} is already in use!`
};