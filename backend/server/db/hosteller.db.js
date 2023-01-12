const pool = require("../config/index");


const createHostellerDb = async (name, password, enrollment_number, contact_no, mail, gender, address, admission_date, expire_date, semester, room_id, warden_id) => {
    const { rows } = await pool.query(
        "INSERT INTO hosteller (name, password, enrollment_number, contact_no, mail, gender, address, admission_date, expire_date, semester, room_id, warden_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING id,name,enrollment_number, contact_no, mail, gender, address,role, admission_date, expire_date, semester, room_id, warden_id",
        [name, password, enrollment_number, contact_no, mail, gender, address, admission_date, expire_date, semester, room_id, warden_id]
    );
    return rows[0];
}

const getHostellerByEnrollmentDb = async (enrollment_number) => {
    const { rows } = await pool.query(
        "SELECT * FROM public.hosteller where enrollment_number=$1",
        [enrollment_number]
    );
    return rows[0];
}

const getHostellerByMailDb = async (mail) => {
    const { rows } = await pool.query(
        "SELECT * FROM public.hosteller where mail=$1",
        [mail]
    );
    return rows[0];
}

const getHostellerByContactDb = async (contact_no) => {
    const { rows } = await pool.query(
        "SELECT * FROM public.hosteller where contact_no=$1",
        [contact_no]
    );
    return rows[0];
}

module.exports = {
    createHostellerDb,
    getHostellerByEnrollmentDb,
    getHostellerByMailDb,
    getHostellerByContactDb,
}