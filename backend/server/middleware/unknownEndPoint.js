const { ErrorHandler } = require("./error")

const unknownEndPoint = (request, response) => {
    throw new ErrorHandler(401, "unknown endpoint");
}

module.exports = unknownEndPoint;