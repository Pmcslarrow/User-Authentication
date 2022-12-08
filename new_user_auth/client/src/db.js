// db.js 

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Loly2012",
    host: "localhost",
    port: 5432,
    database: "usermanagement"
})

module.exports = pool;