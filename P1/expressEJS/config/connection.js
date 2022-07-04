const { Pool } = require('pg')
// Jgn lupa diganti sesuai postgres kalian
const pool = new Pool({
    user : 'postgres',
    database : 'HoreDB',
    port : 5432,
    password : 'postgres',
    host: 'localhost'
})

module.exports = pool