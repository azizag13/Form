const express = require('express');
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');



// Connect to the Mongo DB
const mongoose = require("mongoose");
connectDB();





const server = http.createServer(app);

server.listen(3030, () => {
    console.log(`server is running in port 3030`)
} )