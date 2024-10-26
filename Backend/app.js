// /index.js
const express = require('express');
require('dotenv').config();
var cookieParser = require('cookie-parser');
const crudRouter = require('./routes/crud');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Use CRUD routes
app.use("/", crudRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
