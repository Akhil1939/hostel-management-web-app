const hostellerService = require("../services/hosteller.service");

const createAccountHosteller = async (req, res, next) => {

    const resp = await hostellerService.signUpHosteller(req.body, next);

    if (resp === undefined) {
        return;
    }
    const { authToken, newHosteller, guardian_ids } = await resp;
    res.cookie("authToken", authToken, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "development" ? true : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
    })
    res.status(201).json({
        token: authToken,
        hosteller: newHosteller,
        guardian_ids,
    })
}


const loginHosteller = async (req, res, next) => {
    const { mail, password } = await req.body;
    const resp = await hostellerService.loginHosteller(mail, password, next);

    if (resp === undefined) {
        return;
    }

    const { authToken, hosteller } = await resp;

    res.cookie("authToken", authToken, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "development" ? true : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
    })
    res.status(201).json({
        token: authToken,
        hosteller,
    })
}

const logoutHosteller = async (req, res) => {
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
    createAccountHosteller,
    loginHosteller,
    logoutHosteller,
}
