const { Pool } = require('pg')

module.exports = new Pool ({
    user: 'postgres',
    passowrd: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'my_teacher'
})