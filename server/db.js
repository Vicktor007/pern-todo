const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pg13cd",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;

// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "your_cloud_db_username",
//     password: "your_cloud_db_password",
//     host: "your_cloud_db_host",
//     port: your_cloud_db_port, // usually 5432 for PostgreSQL
//     database: "your_cloud_db_name"
// });

// module.exports = pool;


// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
// });

// module.exports = pool;
