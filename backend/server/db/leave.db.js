const pool = require("../config/index");

// Authorize for hostellers
const createLeaveDb = async (subject, from_date, to_date, reason, vehicle, roommate_id, place, warden_id, hosteller_id) => {
    const { rows } = await pool.query("INSERT INTO public.leave(subject, from_date, to_date, reason, vehicle, roommate_id, place, warden_id, hosteller_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id, subject, from_date, to_date, reason, vehicle, roommate_id, place, warden_id, hosteller_id",
        [subject, from_date, to_date, reason, vehicle, roommate_id, place, warden_id, hosteller_id]
    );
    return rows[0];
}

const getAllLeaveRequestsForHostellerDb = async (hosteller_id) => {
    const { rows } = await pool.query("SELECT * FROM public.leave WHERE hosteller_id=$1", [hosteller_id]);
    return rows;
}

const getLeaveReuestByIdDb = async (id) => {
    const { rows } = await pool.query("SELECT * FROM leave WHERE id=$1", [id]);
    return rows[0];
}

const updateLeaveRequestDb = async (id, subject, from_date, to_date, reason, vehicle, roommate_id, place) => {
    const { rows } = await pool.query("UPDATE leave SET subject=$1, from_date=$2, to_date=$3, reason=$4, vehicle=$5, roommate_id=$6, place=$7, updated_at=CURRENT_DATE WHERE id=$8 RETURNING id, subject, from_date, to_date, reason, vehicle, roommate_id, place, warden_id, hosteller_id",
        [subject, from_date, to_date, reason, vehicle, roommate_id, place, id])
    return rows[0];
}

const deleteLeaveRequestDb = async (id) => {
    const { rows } = await pool.query("DELETE FROM leave WHERE id=$1 RETURNING *", [id]);
    return rows[0];
}

// Authorize for roommate
const getAllLeaveRequestsForRoommateDb = async (roommate_id) => {
    const { rows } = await pool.query("SELECT * FROM public.leave WHERE roommate_id=$1", [roommate_id]);
    return rows;
}

const updateRoommateStatusDb = async (id, roommate_status) => {
    const { rows } = await pool.query(
        "UPDATE leave SET roommate_status=$1 WHERE id=$2 RETURNING *",
        [roommate_status, id]
    );
    return rows[0];
}



// Authorize for warden
const getAllLeaveRequestsForWardenDb = async (warden_id) => {
    const { rows } = await pool.query("SELECT * FROM public.leave WHERE warden_id=$1", [warden_id]);
    return rows;
}

const updateHostellerStatusDb = async (id, status, remarks) => {
    const { rows } = await pool.query(
        "UPDATE leave SET status=$1, remarks=$2,updated_at=CURRENT_DATE, remarks_date=CURRENT_DATE WHERE id=$3 RETURNING *",
        [status, remarks, id]
    );
    return rows[0];
}



module.exports = {
    createLeaveDb,
    getAllLeaveRequestsForHostellerDb,
    getLeaveReuestByIdDb,
    updateLeaveRequestDb,
    deleteLeaveRequestDb,

    // for roommate
    getAllLeaveRequestsForRoommateDb,
    updateRoommateStatusDb,

    // for warden
    getAllLeaveRequestsForWardenDb,
    updateHostellerStatusDb,
}