const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'partnerChef8',
    port: 5432,
    host: 'localhost'
})

module.exports = pool