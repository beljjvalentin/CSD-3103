// Set up mongoose connection
const mongoose = require('mongoose');
require('dotenv').config();

// Use environment variables for credentials
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

// MongoDB URI with database name specified
const mongoDB = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.flk7i.mongodb.net/shop_db?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.error('MongoDB connection error:', err));

mongoose.Promise = global.Promise;

module.exports = mongoose;