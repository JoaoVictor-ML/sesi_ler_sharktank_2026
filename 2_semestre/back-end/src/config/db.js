const mysql = require("mysql2/promise")
require("dotenv").config()

const con = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "gestao_refeitorio"
})

module.exports = con