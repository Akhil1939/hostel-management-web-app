const authService = require("../services/auth.service")
// const catchAsyncErrors = require("../middleware/catchAsyncError")

const createAccountWarden = async (req, res, next) => {
    const warden = { ...req.body };
    const resp = await authService.signUp(warden, next)

    if (resp === undefined) {
        return;
    }
    const { authToken, newWarden } = await resp;
    res.cookie("authToken", authToken, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "development" ? true : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
    })
    res.status(201).json({
        token: authToken,
        warden: newWarden
    })
}

const loginWarden = async (req, res, next) => {
    const { mail, password } = await req.body;
    const resp = await authService.login(mail, password, next);

    if (resp === undefined) {
        return;
    }

    const { authToken, warden } = await resp;

    res.cookie("authToken", authToken, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "development" ? true : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
    })
    res.status(201).json({
        token: authToken,
        warden
    })
}

const logoutWarden = async (req, res) => {
    res.cookie("authToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });

}

module.exports = {
    createAccountWarden,
    loginWarden,
    logoutWarden,
}