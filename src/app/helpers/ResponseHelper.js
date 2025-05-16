module.exports = async ({ response, success = true, status = 200, message = "", data = null, errorType = null }) => {
  const responsePayload = { success, message };
  if (data != null) responsePayload.data = data;
  if (errorType != null) responsePayload.errorType = errorType;
  
  return response.status(status).json(responsePayload);
};