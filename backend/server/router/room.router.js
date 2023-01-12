const { createRoom, deleteRoom } = require("../controller/room.controller");
const { verifyToken } = require("../middleware/verifyToken");
const { verifyWarden } = require("../middleware/verifyUser")
const router = require("express").Router();

router.delete("/delete/:roomId", verifyToken, verifyWarden, deleteRoom);
router.post("/create", verifyToken, verifyWarden, createRoom);

module.exports = router;