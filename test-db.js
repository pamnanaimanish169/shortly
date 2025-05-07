// Setup Config
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

// Connect to the Database
(async () => {
    try {
      const client = await pool.connect();
      console.log('DB connected.');
      const res = await client.query('SELECT NOW()');
      console.log('Current time:', res.rows[0].now)
      client.release();
    } catch (error) {
        console.error('Connection error:', error.message);
    } finally {
        await pool.end();
    }
})();
