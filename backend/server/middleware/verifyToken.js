const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("./error")

const verifyToken = async (req, res, next) => {
    try {
        const { authToken } = req.cookies;

        if (!authToken) {
            return next(new ErrorHandler(401, "Login to access resource"));
        }
        try {
            const verified = jwt.verify(authToken, process.env.SECRET);
            req.user = verified;
            next();
        } catch (error) {
            return next(new ErrorHandler(401, error.message || "Invalid Token"));
        }
    }
    catch (err) {
        return next(new ErrorHandler("500", "Token error"));
    }
}


module.exports = {
    verifyToken,
}