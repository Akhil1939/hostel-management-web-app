const { requestLeave, getAllRequestsForHosteller, deleteLeaveRequest, updateLeaveRequest, getLeaveRequestById, updateRoommateStatus, getRoommateLeaveRequests, getRoommateLeaveRequestById, getWardenLeaveRequests, getWardenLeaveRequestById, updateHostellerStatus } = require("../controller/leave.controller");
const { verifyToken } = require("../middleware/verifyToken");
const { verifyHosteller, verifyWarden } = require("../middleware/verifyUser");

const router = require("express").Router();

router.route("/")
    .get(verifyToken, verifyHosteller, getAllRequestsForHosteller)
    .post(verifyToken, verifyHosteller, requestLeave)

// roommate
router.route("/roommate")
    .get(verifyToken, verifyHosteller, getRoommateLeaveRequests);

router.route("/roommate/:id")
    .get(verifyToken, verifyHosteller, getRoommateLeaveRequestById)
    .put(verifyToken, verifyHosteller, updateRoommateStatus);

// warden 
router.route("/warden")
    .get(verifyToken, verifyWarden, getWardenLeaveRequests);

router.route("/warden/:id")
    .get(verifyToken, verifyWarden, getWardenLeaveRequestById)
    .put(verifyToken, verifyWarden, updateHostellerStatus);


router.route("/:id")
    .put(verifyToken, verifyHosteller, updateLeaveRequest)
    .get(verifyToken, verifyHosteller, getLeaveRequestById)
    .delete(verifyToken, verifyHosteller, deleteLeaveRequest);


// for roomate
// router.route("/roommate")
//     .get(verifyToken, verifyHosteller, getRoommateLeaveRequests);

// router.route("/roommate/:id")
//     .get(verifyToken, verifyHosteller, getRoommateLeaveRequestById)
//     .put(verifyToken, verifyHosteller, updateRoommateStatus);


// for warden
// router.route("/warden")
//     .get(verifyToken, verifyWarden, getWardenLeaveRequests);

// router.route("/warden/:id")
//     .get(verifyToken, verifyWarden, getWardenLeaveRequestById)
//     .put(verifyToken, verifyWarden, updateRoommateStatus);




module.exports = router;