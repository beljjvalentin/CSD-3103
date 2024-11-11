// Created by Valentin Belii
// Student code: c0886610
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
const app = express();
// app.set('secretKey', 'nodeRestApi'); // jwt secret token
// Attempting connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setting default view engine to PUG
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

// Redirecting from root to /users
app.get('/', (req, res) => {
    res.redirect('/users');
});

// Setting routes for the app
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

// Starting the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
