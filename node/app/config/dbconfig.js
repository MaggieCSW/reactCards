//  do before dao

const mysql = require('mysql2')
const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'reactCards'
})

module.exports = pool