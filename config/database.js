// Created by Valentin Belii
// Student code: c0886610
// Setting up mongoose connection
const mongoose = require('mongoose');
require('dotenv').config();

// Use environment variables for credentials
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB URI with database name specified
const mongoDB = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_URI}?retryWrites=true&w=majority&appName=Cluster0`;

// Connecting to MongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.error('MongoDB connection error:', err));

mongoose.Promise = global.Promise;

module.exports = mongoose;