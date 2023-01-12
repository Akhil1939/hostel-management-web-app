const router = require("express").Router();
const auth = require("./auth.router");
const room = require("./room.router");
const hosteller = require("./hosteller.router");
const leave = require("./leave.router");

router.use("/auth", auth);
router.use("/room", room);
router.use("/hosteller", hosteller);
router.use("/leave", leave);

module.exports = router;