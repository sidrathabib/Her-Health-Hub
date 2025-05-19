// Load environment variables from .env file -> https://www.npmjs.com/package/dotenv
require("dotenv").config();

// Import Packages and Modules
const express = require("express"); // -> https://expressjs.com
const cors = require("cors");
const db = require("./queries"); // Database queries

// Create an instance of the express application
const app = express();

// Set the port number
const port = 4000;

app.use(cors());
// Allows you to use JSON with post request body
app.use(express.json());

// Define route handlers
// Expressjs guide: https://expressjs.com/en/guide/routing.html
// Examples: https://expressjs.com/en/starter/examples.html
// Handler for the "/api" route
app.get("/api", (req, res) => {
  res.send("her health hub");
});

// Routes for database
app.get("/api/articles", db.getArticles);
app.get("/api/articles/:title", db.getArticleByTitle);
// app.post("/api/adduser", db.addUser);

// app.put("/api/updateuser", db.updateUser);

// app.delete("/api/deleteuser", db.deleteUser);

// Start your express server and listen for incoming connections
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
