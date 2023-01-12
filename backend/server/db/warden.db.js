const pool = require("../config/index")

const createWardenDb = async ({ name, contact_no, mail, password }) => {
    const { rows } = await pool.query(
        "INSERT INTO warden(name, contact_no, mail, password) VALUES($1,$2,$3,$4) returning id, name, contact_no, mail, role, hostel_type, created_at",
        [name, contact_no, mail, password]
    );

    return rows[0];
}

const getWardenByMailDb = async (mail) => {
    const { rows } = await pool.query(
        "SELECT * FROM warden where lower(mail)=lower($1)"
        , [mail])

    return rows[0];
}

const getWardenByContactNoDb = async (contact_no) => {
    const { rows } = await pool.query(
        "SELECT * FROM warden where contact_no=$1"
        , [contact_no])

    return rows[0];
}

const getWardenIdByName = async (wardenId) => {
    const { rows } = await pool.query("SELECT id FROM public.warden WHERE id = $1", [wardenId]);
    return rows[0].id;
}

const getWardenIdByHostellerId = async (hosteller_id) => {
    const { rows } = await pool.query("SELECT warden_id from public.hosteller WHERE id=$1", [hosteller_id]);
    return rows[0].warden_id;
}

module.exports = {
    getWardenByMailDb,
    getWardenByContactNoDb,
    createWardenDb,
    getWardenIdByName,

    getWardenIdByHostellerId,
}