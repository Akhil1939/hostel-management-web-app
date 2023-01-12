const { leaveService } = require("../services/leave.service");

const requestLeave = async (req, res, next) => {
    const leaveData = { ...req.body, hosteller_id: req.user.id };

    const newLeave = await leaveService.requestLeave(leaveData, next);

    if (newLeave === undefined) {
        return;
    }

    return res.status(201).json({
        status: "success",
        leave: newLeave,
    })
}

const getAllRequestsForHosteller = async (req, res, next) => {
    const leaves = await leaveService.getAllLeaveRequestHosteller(req.user.id, next);
    if (!leaves) {
        return;
    }
    return res.status(200).json({
        status: "sucess",
        length: leaves.length,
        leaves
    })
}

const getLeaveRequestById = async (req, res, next) => {
    const leave = await leaveService.getLeaveRequestById(req.params.id, req.user.id, next);
    if (!leave) {
        return;
    }
    return res.status(200).json({
        status: "success",
        leave,
    });
}

const updateLeaveRequest = async (req, res, next) => {
    const leaveData = { ...req.body, hosteller_id: req.user.id, id: req.params.id };
    const updatedLeave = await leaveService.updateLeaveRequest(leaveData, next);

    if (updatedLeave === undefined) {
        return;
    }

    return res.status(201).json({
        status: "success",
        leave: updatedLeave,
    })
}

const deleteLeaveRequest = async (req, res, next) => {
    const deletedLeave = await leaveService.deleteLeaveRequest(req.params.id, req.user.id, next);
    if (!deletedLeave) {
        return;
    }
    return res.status(201).json({
        status: "success",
        leave: deletedLeave,
    })
}


// For roommate
const getRoommateLeaveRequests = async (req, res, next) => {
    const leaves = await leaveService.getRoommateLeaveRequests(req.user.id, next);
    if (!leaves) {
        return;
    }
    return res.status(200).json({
        status: "sucess",
        length: leaves.length,
        leaves
    })
}

const getRoommateLeaveRequestById = async (req, res, next) => {
    const leave = await leaveService.getRoommateLeaveRequestById(req.params.id, req.user.id, next);
    if (!leave) {
        return;
    }
    return res.status(200).json({
        status: "success",
        leave,
    });
}

const updateRoommateStatus = async (req, res, next) => {
    const info = {
        id: req.params.id,
        hosteller_id: req.user.id,
        roommate_status: req.body.roommate_status,
    }
    const updatedLeave = await leaveService.updateRoommateStatus(info, next);
    if (!updatedLeave) {
        return;
    }
    return res.status(200).json({
        status: "success",
        leave: updatedLeave,
    })
}

// For warden
const getWardenLeaveRequests = async (req, res, next) => {
    const leaves = await leaveService.getWardenLeaveRequests(req.user.id, next);
    if (!leaves) {
        return;
    }
    return res.status(200).json({
        status: "success",
        length: leaves.length,
        leaves
    })
}

const getWardenLeaveRequestById = async (req, res, next) => {
    const leave = await leaveService.getWardenLeaveRequestById(req.params.id, req.user.id, next);
    if (!leave) return;
    return res.status(200).json({
        status: "success",
        leave,
    });
}

const updateHostellerStatus = async (req, res, next) => {
    const info = {
        id: req.params.id,
        warden_id: req.user.id,
        status: req.body.status,
        remarks: req.body.remarks || "",
    }
    const updatedLeave = await leaveService.updateHostellerStatus(info, next);
    if (!updatedLeave) {
        return;
    }
    return res.status(200).json({
        status: "success",
        leave: updatedLeave,
    })
}


module.exports = {
    requestLeave,
    getAllRequestsForHosteller,
    getLeaveRequestById,
    updateLeaveRequest,
    deleteLeaveRequest,

    //for roommate
    getRoommateLeaveRequests,
    getRoommateLeaveRequestById,
    updateRoommateStatus,

    // for warden
    getWardenLeaveRequests,
    getWardenLeaveRequestById,
    updateHostellerStatus,
};