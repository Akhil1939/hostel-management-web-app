const { ErrorHandler } = require("./error");

const verifyWarden = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role && role === "warden") {
            req.user = {
                ...req.user,
                role
            }
            return next();
        }
        return next(new ErrorHandler(404, "Require warden role"));
    }
    catch (err) {
        next(err.statusCode, err.message);
    }
}

const verifyHosteller = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role && role === "hosteller") {
            req.user = {
                ...req.user,
                role
            }
            return next();
        }
        return next(new ErrorHandler(404, "Require hosteller role"));

    }
    catch (err) {
        next(err.statusCode, err.message);
    }
}


const verifyAdmin = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role && role === "admin") {
            req.user = {
                ...req.user,
                role
            }
            return next();
        }
        return next(new ErrorHandler(404, "Require admin role"))
    }
    catch (err) {
        next(err.statusCode, err.message);
    }
}



module.exports = {
    verifyWarden,
    verifyHosteller,
    verifyAdmin
}