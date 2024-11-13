import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydatabase",
  password: "postgres",
  port: 5432,
});

const createTable = async () => {
  try {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS piska (
                id SERIAL PRIMARY KEY,
                content TEXT NOT NULL
            )
        `);
    console.log("Table 'piska' created or already exists.");
  } catch (err) {
    console.error("Error creating table", err);
  }
};

createTable();

export default pool;