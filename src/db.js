import { PGlite } from "@electric-sql/pglite";

// Initialize the database
const db = new PGlite();
let isInitialized = false;

// Function to initialize the database schema
async function initDB() {
  if (isInitialized) return;
  
  await db.query(`
    CREATE TABLE IF NOT EXISTS patients (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      date_of_birth DATE NOT NULL,
      gender TEXT NOT NULL,
      address TEXT,
      phone TEXT,
      email TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  
  isInitialized = true;
}

export { db, initDB };