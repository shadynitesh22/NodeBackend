const express = require('express');
const route = express.Router();

export default app => {
app.use("/api",require('./app/post'));




}