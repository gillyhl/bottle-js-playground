class ResponseService {
  /**
   * Send a standardised error object back to the client given a
   * message and HTTP status code.
   * @param {express.Response} res Express response object
   * @param {String} message Error message to send
   * @param {Integer} httpStatus HTTP Status code to send.
   */
  sendError (res, message, httpStatus = 500) {
    httpStatus = httpStatus >= 400 && httpStatus < 600 ? httpStatus : 500
    res.status(httpStatus).json({
      data: {
        error: {
          message
        }
      },
      httpStatus
    })
  }

  /**
   * Send a standardised success object to the client with the given data.
   * @param {express.Response} res Express response object
   * @param {Object} data Data to send back to the client
   * @param {Integer} httpStatus HTTP Status code to send
   */
  sendSuccess (res, data, httpStatus = 200) {
    httpStatus = httpStatus >= 200 && httpStatus < 300 ? httpStatus : 500
    res.status(httpStatus).json({
      data,
      httpStatus
    })
  }
}

module.exports = ResponseService