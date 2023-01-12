const { createLeaveDb, getAllLeaveRequestsForHostellerDb, getLeaveReuestByIdDb, updateLeaveRequestDb, deleteLeaveRequestDb, updateRoommateStatusDb, getAllLeaveRequestsForRoommateDb, getAllLeaveRequestsForWardenDb, updateHostellerStatusDb } = require("../db/leave.db");
const { getWardenIdByHostellerId } = require("../db/warden.db");
const { ErrorHandler } = require("../middleware/error");

class LeaveService {
    async requestLeave({ subject, from_date, to_date, reason, vehicle, roommate_id, place, hosteller_id }, next) {
        try {

            const warden_id = await getWardenIdByHostellerId(hosteller_id);

            if (!subject || !from_date || !to_date || !reason || !vehicle || !roommate_id || !place || !warden_id || !hosteller_id) {
                return next(new ErrorHandler(401, "All fields required"))
            }

            const newLeave = await createLeaveDb(subject, from_date, to_date, reason, vehicle, roommate_id, place, warden_id, hosteller_id);
            return newLeave;
        } catch (err) {
            return next(err.statusCode, err.message);
        }
    }

    async getAllLeaveRequestHosteller(hosteller_id, next) {
        try {
            const leaves = await getAllLeaveRequestsForHostellerDb(hosteller_id);
            return leaves;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    async getLeaveRequestById(id, hosteller_id, next) {
        try {
            const leave = await getLeaveReuestByIdDb(id);
            if (!leave || (leave && leave.hosteller_id !== hosteller_id)) {
                return next(new ErrorHandler(401, "Access denied"))
            }
            return leave;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    async updateLeaveRequest({ id, subject, from_date, to_date, reason, vehicle, roommate_id, place, hosteller_id }, next) {
        try {
            if (!subject || !from_date || !to_date || !reason || !vehicle || !roommate_id || !place) {
                return next(new ErrorHandler(401, "All fields required"))
            }
            if (new Date(from_date) <= Date.now()) {
                return next(new ErrorHandler(401, "Past request can not be updated"))
            }
            const leave = await getLeaveReuestByIdDb(id);

            if (!leave || (leave && leave.hosteller_id !== hosteller_id)) {
                return next(new ErrorHandler(401, "Access denied"))
            }

            const updatedLeave = await updateLeaveRequestDb(id, subject, from_date, to_date, reason, vehicle, roommate_id, place);
            return updatedLeave;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    async deleteLeaveRequest(id, hosteller_id, next) {
        try {
            const leave = await getLeaveReuestByIdDb(id);
            if (!leave || (leave && leave.hosteller_id !== hosteller_id)) {
                return next(new ErrorHandler(401, "Access denied"))
            }
            if (leave.status && leave.status === 'a') {
                return next(new ErrorHandler(401, "Accepted leave can not be deleted"))
            }
            const deletedLeave = await deleteLeaveRequestDb(id);
            return deletedLeave;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    // for roommate
    // 1. get all
    async getRoommateLeaveRequests(roomate_id, next) {
        try {
            const roommateLeaves = await getAllLeaveRequestsForRoommateDb(roomate_id);
            return roommateLeaves;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    //2. by id 
    async getRoommateLeaveRequestById(id, hosteller_id, next) {
        try {
            const leave = await getLeaveReuestByIdDb(id);
            if (!leave || leave.roommate_id !== hosteller_id) {
                return next(new ErrorHandler(401, "Access denied"));
            }
            return leave;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    // 3. update status
    async updateRoommateStatus({ id, hosteller_id, roommate_status }, next) {
        try {
            const leave = await getLeaveReuestByIdDb(id);
            if (!leave || (leave && leave.roommate_id !== hosteller_id)) {
                return next(new ErrorHandler(401, "Access denied"))
            }
            if (!roommate_status) {
                return next(new ErrorHandler(401, "Please update status : " + roommate_status))
            }
            if (leave.roommate_status !== 'p' || leave.status !== 'p') {
                return next(new ErrorHandler(401, "status already updated once"));
            }
            const updatedLeave = await updateRoommateStatusDb(id, roommate_status);
            return updatedLeave;
        }
        catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    //for warden
    // 1. get all
    async getWardenLeaveRequests(warden_id, next) {
        try {
            const hostellerLeaves = await getAllLeaveRequestsForWardenDb(warden_id);
            return hostellerLeaves;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    //2. by id 
    async getWardenLeaveRequestById(id, warden_id, next) {
        try {
            const leave = await getLeaveReuestByIdDb(id);
            if (!leave || leave.warden_id !== warden_id) {
                return next(new ErrorHandler(401, "Access denied"));
            }
            return leave;
        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }

    // 3. update
    async updateHostellerStatus({ id, warden_id, status, remarks }, next) {
        try {
            const leave = await getLeaveReuestByIdDb(id);
            if (!leave || leave.warden_id !== warden_id) {
                return next(new ErrorHandler(401, "Access denied"));
            }
            if (status === 'p') {
                return next(new ErrorHandler(401, "please provide accept(a) or reject(r)"));
            }
            if (leave.roommate_status !== 'a') {
                return next(new ErrorHandler(401, "Roommate has not accepted status yet."));
            }
            const updatedLeave = await updateHostellerStatusDb(id, status, remarks);
            return updatedLeave;

        } catch (error) {
            return next(error.statusCode, error.message);
        }
    }
}



module.exports = {
    leaveService: new LeaveService(),
}