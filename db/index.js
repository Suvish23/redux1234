const { Pool } = require("pg");
require("dotenv").config();

const proConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production"
      ? proConfig
      : {
          query: (text, params) => pool.query(text, params),
        },
});

module.exports = pool;
