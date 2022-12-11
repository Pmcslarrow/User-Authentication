// db.js 

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "NOT SHOWING!!!",
    host: "localhost",
    port: 5432,
    database: "usermanagement"
})

module.exports = pool;