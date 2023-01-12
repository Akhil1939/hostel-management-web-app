const { Pool } = require("pg");

require("dotenv").config()

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

// const pool = new Pool({ connectionString: connectionString, ssl: false });
const options = {
    user: 'postgres',
    password: 'admin',
    port: 5432,
    host: 'localhost',
    database: 'gec_leave_db'
}

const pool = new Pool(options)

module.exports = pool;