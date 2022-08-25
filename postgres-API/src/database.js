const { Pool } = require( 'pg' );

const pool = new Pool( {
    host: 'localhost',
    user: 'postgres',
    password: 'oracle',
    database: 'HR',
    port: '5432'
} );

module.exports = pool;