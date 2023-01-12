const { createAccountWarden, loginWarden, logoutWarden } = require("../controller/auth.controller");

const router = require("express").Router();

router.post("/signup", createAccountWarden);
router.post("/signin", loginWarden);
router.get("/signout", logoutWarden);

module.exports = router; 