const { createAccountHosteller, loginHosteller, logoutHosteller, } = require("../controller/hosteller.controller");

const router = require("express").Router();

router.post("/signup", createAccountHosteller);
router.post("/signin", loginHosteller);
router.get("/signout", logoutHosteller);


module.exports = router;  