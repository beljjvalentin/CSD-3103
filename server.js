const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./config/database'); //database configuration
const usersRouter = require('./routes/userRoutes'); // routes configuration
const app = express();
app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRouter);

// Redirect from root to /users
app.get('/', (req, res) => {
    res.redirect('/users');
});

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
