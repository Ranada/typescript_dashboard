// Import express and create app
const express = require('../node_modules/express');
const app = express();

// Process environment variables
require('../node_modules/dotenv').config();

// Instantiate database

// Middleware for parsing request body
app.use(express.json());

// Routes

// Set port and listen for incoming requests
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));