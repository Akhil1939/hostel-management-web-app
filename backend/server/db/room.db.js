const pool = require("../config/index");

const createRoomDb = async (room_number, warden_id, next) => {
    try {
        const { rows } = await pool.query("INSERT INTO public.room(room_number, warden_id) VALUES($1,$2) RETURNING room_number", [room_number, warden_id]);
        return rows[0];
    }
    catch (err) {
        return next(err.statusCode, err.message);
    }
}

const deleteRoomDb = async (room_number, next) => {
    try {
        const { rows } = await pool.query("DELETE FROM public.room WHERE id=$1 RETURNING room_number", [room_number]);
        return rows[0];
    }
    catch (err) {
        return next(err.statusCode, err.message);
    }
}

const getRoomIdByNumber = async (room_number) => {
    const { rows } = await pool.query("SELECT id from public.room WHERE room_number = $1", [room_number]);
    return rows[0].id;
}

module.exports = {
    createRoomDb,
    deleteRoomDb,
    getRoomIdByNumber,
}