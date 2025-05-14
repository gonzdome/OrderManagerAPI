module.exports = async ({ response, success = true, status = 200, message = "", data = null, errorType = null }) => {
  const responsePayload = { success, message, data };
  if (errorType != null) responsePayload.errorType = errorType;
  
  return response.status(status).json(responsePayload);
};