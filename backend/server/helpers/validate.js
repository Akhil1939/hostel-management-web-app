const validateUser = (mail, password) => {
    const validMail = typeof mail === "string" && mail.trim() !== "";
    const validPassword = typeof password === "string" && password.trim().length >= 6;

    return validMail && validPassword;
}

module.exports = { validateUser };