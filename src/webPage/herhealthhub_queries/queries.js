// Import the "pg" package for interacting with PostgreSQL databases, and
// create a new "pool" connection.
// Documentation -> https://node-postgres.com
// Pool -> https://node-postgres.com/apis/pool
const Pool = require("pg").Pool;

// Set up PostgreSQL connection to Heroku PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Fetches all users from the database, ordered by ID (descending)
const getArticles = (request, response) => {
  const text = 'SELECT * FROM "herhealth_articles" ORDER BY id DESC';

  pool.query(text, (error, results) => {
    if (error) {
      console.error(error);
      response.status(400).json({ error: "Failed to retrieve articles." });
      return;
    }
    response.status(200).json({
      message: "Articles retrieved successfully!",
      data: results.rows,
    });
  });
};

// Fetches a single user based on the userName
const getArticleByTitle = (request, response) => {
  const text = 'SELECT * FROM "herhealth_articles" WHERE "article_title" = $1';
  const values = [request.params.title];
  console.log(request.params);

  pool.query(text, values, (error, results) => {
    if (error) {
      console.error(error);
      response.status(400).json({ error: "Failed to retrieve article." });
      return;
    }
    if (results.rows.length === 0) {
      response.status(404).json({ error: "article not found." });
      return;
    }
    response
      .status(200)
      .json({ message: "Article retrieved successfully!", data: results.rows });
  });
};

// Export all functions for use in other files (e.g., server.js)
module.exports = {
  getArticles,
  getArticleByTitle,
};
