import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "preparaif",
  password: "omelhorsitedobr",
  port: 5432,
});
