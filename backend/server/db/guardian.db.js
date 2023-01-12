const pool = require("../config/index");

const createGuardianDb = async (name, contact_no, mail, relation, hosteller_id) => {
    const { rows } = await pool.query("INSERT INTO public.guardian (name, contact_no, mail, relation, hosteller_id) VALUES ($1,$2,$3,$4,$5) RETURNING id",
        [name, contact_no, mail, relation, hosteller_id]);
    return rows[0].id;
}

module.exports = {
    createGuardianDb,
}