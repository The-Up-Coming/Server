const express = require('express');
const cors = require('cors');
const router = require('./middleware/routes');

const app = express();

/* Middleware */
app.use(cors()); // enables cors policy for network request/responses
app.use(express.json()); // parses requests with JSON payloads
app.use(router);

module.exports = app;
