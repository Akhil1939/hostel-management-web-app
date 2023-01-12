const pool = require("../config/index");

const createRoommateDb = async (room_id, hosteller_id) => {
    const { rows } = await pool.query("INSERT INTO public.roommate(room_id,hosteller_id) VALUES($1,$2) returning id", [room_id, hosteller_id]);
    return rows[0].id;
}

// hostellers id, name, mail, contact_no
const getRoommateDetailsByRoomIdDb = async (room_id, hosteller_id) => {
    const { rows } = await pool.query("SELECT hosteller.id,hosteller.name,hosteller.mail,hosteller.contact_no FROM public.roommate INNER JOIN public.hosteller ON hosteller.id = roommate.hosteller_id WHERE roommate.room_id = $1 AND roommate.hosteller_id<>$2", [room_id, hosteller_id]);

    return rows;
}

module.exports = {
    createRoommateDb,
    getRoommateDetailsByRoomIdDb,
}